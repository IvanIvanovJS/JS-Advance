import { html } from "../../node_modules/lit-html/lit-html.js";
import { editTipById, getTipById } from "../api/dataService.js";

import { createSubmitHandler } from "../service/formService.js";
import { notify } from "../service/nothify.js";

const temp = (ctx, data) => html`<section id="edit">
        <div class="form form-item">
          <h2>Edit Your Item</h2>
          <form class="edit-form" @submit=${createSubmitHandler(onSubmit.bind(null, ctx, data._id))}>
            <input type="text" name="title" id="title" placeholder="Title" .value=${data.title} />
            <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" .value=${data.imageUrl}  />
            <input type="text" name="type" id="type" placeholder="Type" .value=${data.type} />
            <select name="difficulty" id="difficulty" .value=${data.difficulty} >
              <option value="" disabled selected>Difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="50" .value=${data.description} ></textarea>
            <button type="submit">Edit</button>
          </form>
        </div>
      </section>`
export async function showEdit(ctx) {
    const id = ctx.params.id
    const data = await getTipById(id)
    ctx.render(temp(ctx, data, id))
}

async function onSubmit(ctx, id, form) {

    const {
        title,
        imageUrl,
        type,
        difficulty,
        description
    }
        = form


    try {
        if (!title || !type || !difficulty || !description || !imageUrl) {
            throw new Error("All fields are reqierd!")
        }
        await editTipById(id, {
            title,
            imageUrl,
            type,
            difficulty,
            description
        })
        ctx.page.redirect(`/details/${id}`)
    } catch (error) {
        return notify(error.message)
    }


}