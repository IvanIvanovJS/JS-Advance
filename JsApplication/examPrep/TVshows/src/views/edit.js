import { html } from "../../node_modules/lit-html/lit-html.js";
import { editMovieById, getMovieById } from "../api/dataService.js";

import { createSubmitHandler } from "../service/formService.js";

const temp = (ctx, data) => html` <section id="edit">
          <div class="form">
            <h2>Edit Show</h2>
            <form class="edit-form" @submit=${createSubmitHandler(onSubmit.bind(null, ctx, data._id))}>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="TV Show title"
                .value = ${data.title}
              />
              <input
                type="text"
                name="image-url"
                id="image-url"
                placeholder="Image URL"
                .value = ${data.imageUrl}
              />
              <input
              type="text"
              name="genre"
              id="genre"
              placeholder="Genre"
              .value = ${data.genre}
            />
            <input
            type="text"
            name="country"
            id="country"
            placeholder="Country"
            .value = ${data.country}
          />
              <textarea
                id="details"
                name="details"
                placeholder="Details"
                rows="2"
                cols="10"
                .value = ${data.details}
              ></textarea>
              <button type="submit">Edit Show</button>
            </form>
          </div>
        </section>`
export async function showEdit(ctx) {
  const id = ctx.params.id
  const data = await getMovieById(id)
  ctx.render(temp(ctx, data, id))
}

async function onSubmit(ctx, id, form) {

  const { title, genre, country, details } = form
  const imageUrl = form["image-url"]

  try {
    if (!title || !genre || !country || !details || !imageUrl) {
      throw new Error("All fields are reqierd!")
    }
    await editMovieById(id, { title, imageUrl, genre, country, details })
    ctx.page.redirect(`/details/${id}`)
  } catch (error) {
    return alert(error.message)
  }


}