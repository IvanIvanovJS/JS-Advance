import { html } from "../../node_modules/lit-html/lit-html.js"
import { createDrone } from "../api/dataService.js"
import { createSubmitHandler } from "../service/formService.js"
import { notify } from "../service/nothify.js"

const temp = (onSubmit) => html`<section id="create">
        <div class="form form-item">
          <h2>Add Drone Offer</h2>
          <form class="create-form" @submit=${onSubmit}>
            <input type="text" name="model" id="model" placeholder="Drone Model" />
            <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" />
            <input type="number" name="price" id="price" placeholder="Price" />
            <input type="number" name="weight" id="weight" placeholder="Weight" />
            <input type="number" name="phone" id="phone" placeholder="Phone Number for Contact" />
            <input type="text" name="condition" id="condition" placeholder="Condition" />
            <textarea name="description" id="description" placeholder="Description"></textarea>
            <button type="submit">Add</button>
          </form>

        </div>
      </section>`


export function showCreate(ctx) {

    ctx.render(temp(onSubmit))
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
            await createDrone({
                model,
                imageUrl,
                price,
                condition,
                weight,
                phone,
                description
            })
            ctx.page.redirect("/catalog")

        } catch (error) {
            return notify(error.message)
        }
    }
}

