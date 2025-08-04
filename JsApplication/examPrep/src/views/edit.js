import { html } from "../../node_modules/lit-html/lit-html.js"
import { editDroneById, getDroneById } from "../api/dataService.js"
import { createSubmitHandler } from "../service/formService.js"
import { notify } from "../service/nothify.js"

const temp = (onSubmit, data) => html`<section id="edit">
        <div class="form form-item">
          <h2>Edit Offer</h2>
          <form class="edit-form" @submit=${onSubmit}>
            <input type="text" name="model" id="model" placeholder="Drone Model" .value=${data.model} />
            <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" .value=${data.imageUrl} />
            <input type="number" name="price" id="price" placeholder="Price" .value=${data.price} />
            <input type="number" name="weight" id="weight" placeholder="Weight" .value=${data.weight} />
            <input type="number" name="phone" id="phone" placeholder="Phone Number for Contact" .value=${data.phone}  />
            <input type="text" name="condition" id="condition" placeholder="Condition" .value=${data.condition}  />
            <textarea name="description" id="description" placeholder="Description" .value=${data.description} ></textarea>
            <button type="submit">Edit</button>
          </form>
        </div>
      </section>`


export async function showEdit(ctx) {
    const id = ctx.params.id
    const data = await getDroneById(id)
    ctx.render(temp(onSubmit, data))
    async function onSubmit(e) {
        const { model,
            imageUrl,
            price,
            condition,
            weight,
            phone,
            description } = createSubmitHandler(e)
        try {
            if (!model || !imageUrl || !price || !condition || !weight || !phone || !description) {
                throw new Error("All fields are requierd!")
            }
            await editDroneById(id, {
                model,
                imageUrl,
                price,
                condition,
                weight,
                phone,
                description
            })
            ctx.page.redirect(`/details/${id}`)

        } catch (error) {
            return notify(error.message)
        }
    }
}

