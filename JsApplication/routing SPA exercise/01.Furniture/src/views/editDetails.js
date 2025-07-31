import { html } from "../../node_modules/lit-html/lit-html.js";
import { editFurnitureByID, getFurnitureById } from "../services/dataService.js";
let contex = null
export async function showEditDetails(ctx) {
    contex = ctx
    ctx.render(await editTemp())
}
async function editTemp() {

    const id = contex.params.id
    const { description,
        img,
        make,
        material,
        model,
        price,
        year
    } = await getFurnitureById(id)
    return html`
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Edit Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control" id="new-make" type="text" name="make" .value=${make}>
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control" id="new-model" type="text" name="model" .value=${model}>
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control" id="new-year" type="number" name="year" .value=${year}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description"
                            .value=${description}>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price" .value=${price}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img" .value=${img}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material" .value=${material}>
                    </div>
                    <input type="submit" class="btn btn-info" value="Edit" />
                </div>
            </div>
        </form>`
}


async function onSubmit(e) {
    e.preventDefault()
    const id = contex.params.id
    const form = e.target
    const formData = new FormData(e.target)
    const { make,
        model,
        year,
        description,
        price,
        img,
        material } = Object.fromEntries(formData)

    model.length < 4 ? isInvalid(form, "model") : isValid(form, "model")
    make.length < 4 ? isInvalid(form, "make") : isValid(form, "make")
    if (!year || year < 1950 || year > 2050) {
        isInvalid(form, "year")
    } else {
        isValid(form, "year")
    }

    description.length < 10 ? isInvalid(form, "description") : isValid(form, "description")
    price <= 0 ? isInvalid(form, "price") : isValid(form, "price")
    !img ? isInvalid(form, "img") : isValid(form, "img")
    if (form.querySelector(".is-invalid")) {
        return alert("Invalid input")
    }
    await editFurnitureByID(id, {
        make,
        model,
        year,
        description,
        price,
        img,
        material
    })

    contex.page.redirect(`/details/${id}`)

}
function isInvalid(root, input) {
    root.querySelector(`input[name='${input}']`).classList.add("is-invalid")
    root.querySelector(`input[name='${input}']`).classList.remove("is-valid")
}
function isValid(root, input) {
    root.querySelector(`input[name='${input}']`).classList.add("is-valid")
    root.querySelector(`input[name='${input}']`).classList.remove("is-invalid")
}
