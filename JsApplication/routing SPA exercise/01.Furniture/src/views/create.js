import { html } from "../../node_modules/lit-html/lit-html.js";
import { createFurnitureByID } from "../services/dataService.js";

let contex = null;
export function showCreateView(ctx) {
    contex = ctx
    ctx.render(createTemp())
}
function createTemp() {
    return html`
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Create New Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control valid" id="new-make" type="text" name="make">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control" id="new-model" type="text" name="model">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control" id="new-year" type="number" name="year">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Create" />
                </div>
            </div>
        </form>`
}

async function onSubmit(e) {
    e.preventDefault()
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
    await createFurnitureByID({
        make,
        model,
        year,
        description,
        price,
        img,
        material
    })

    contex.page.redirect("/dashboard")

}
function isInvalid(root, input) {
    root.querySelector(`input[name='${input}']`).classList.add("is-invalid")
    root.querySelector(`input[name='${input}']`).classList.remove("is-valid")
}
function isValid(root, input) {
    root.querySelector(`input[name='${input}']`).classList.add("is-valid")
    root.querySelector(`input[name='${input}']`).classList.remove("is-invalid")
}
