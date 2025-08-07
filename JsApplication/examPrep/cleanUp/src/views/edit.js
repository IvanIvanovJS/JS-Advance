import { html } from "../../node_modules/lit-html/lit-html.js";
import { editSolutionById, getSolutionById } from "../api/dataService.js";

import { createSubmitHandler } from "../service/formService.js";

const temp = (ctx, data) => html`  <section id="edit">
          <div class="form">
            <img class="border" src="${data.imageUrl}" alt="" />
            <h2>Edit Solution</h2>
            <form class="edit-form" @submit=${createSubmitHandler(onSubmit.bind(null, ctx, data._id))}>
              <input
                type="text"
                name="type"
                id="type"
                placeholder="Solution Type"
                .value=${data.type}
              />
              <input
                type="text"
                name="image-url"
                id="image-url"
                placeholder="Image URL"
                .value=${data.imageUrl}
              />
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                rows="2"
                cols="10"
                .value=${data.description}
              ></textarea>
              <textarea
                id="more-info"
                name="more-info"
                placeholder="more Info"
                rows="2"
                cols="10"
                .value=${data.learnMore}
              ></textarea>
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>`
export async function showEdit(ctx) {
  const id = ctx.params.id
  const data = await getSolutionById(id)
  ctx.render(temp(ctx, data, id))
}

async function onSubmit(ctx, id, form) {

  const { type, description } = form
  const imageUrl = form["image-url"]
  const learnMore = form["more-info"]

  try {
    if (!type || !description || !learnMore || !imageUrl) {
      throw new Error("All fields are reqierd!")
    }
    await editSolutionById(id, { type, imageUrl, description, learnMore })
    ctx.page.redirect(`/details/${id}`)
  } catch (error) {
    return alert(error.message)
  }


}