import { html } from "../../node_modules/lit-html/lit-html.js";
import { createMovie } from "../api/dataService.js";

import { createSubmitHandler } from "../service/formService.js";

const temp = (ctx) => html`  <section id="create">
          <div class="form" >
            <h2>Add Show</h2>
            <form class="create-form" @submit=${createSubmitHandler(onSubmit.bind(null, ctx))}>
              <input
              type="text"
              name="title"
              id="title"
              placeholder="TV Show title"
            />
            <input
              type="text"
              name="image-url"
              id="image-url"
              placeholder="Image URL"
            />
            <input
            type="text"
            name="genre"
            id="genre"
            placeholder="Genre"
          />
          <input
          type="text"
          name="country"
          id="country"
          placeholder="Country"
        />
            <textarea
              id="details"
              name="details"
              placeholder="Details"
              rows="2"
              cols="10"
            ></textarea>
              <button type="submit">Add Show</button>
            </form>
          </div>
        </section>`
export function showCreate(ctx) {
  ctx.render(temp(ctx))
}

async function onSubmit(ctx, data) {

  const { title, genre, country, details } = data
  const imageUrl = data["image-url"]
  try {
    if (!title || !genre || !country || !details || !imageUrl) {
      throw new Error("All fields are reqierd!")
    }
    await createMovie({ title, imageUrl, genre, country, details })
    ctx.page.redirect('/dashboard')
  } catch (error) {
    return alert(error.message)
  }


}