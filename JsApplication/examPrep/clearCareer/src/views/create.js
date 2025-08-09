import { html } from "../../node_modules/lit-html/lit-html.js";
import { createOffer } from "../api/dataService.js";

import { createSubmitHandler } from "../service/formService.js";

const temp = (ctx) => html`<section id="create">
        <div class="form">
          <h2>Create Offer</h2>
          <form class="create-form" @submit=${createSubmitHandler(onSubmit.bind(null, ctx))}>
            <input type="text" name="title" id="job-title" placeholder="Title" />
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" />
            <input type="text" name="category" id="job-category" placeholder="Category" />
            <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50"></textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
              cols="50"></textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary" />

            <button type="submit">post</button>
          </form>
        </div>
      </section>`
export function showCreate(ctx) {
  ctx.render(temp(ctx))
}

async function onSubmit(ctx, data) {

  const { title,
    imageUrl,
    category,
    description,
    requirements,
    salary
  } = data


  try {
    if (!title || !description || !category || !imageUrl || !requirements || !salary) {
      throw new Error("All fields are reqierd!")
    }

    await createOffer({
      title,
      imageUrl,
      category,
      description,
      requirements,
      salary
    })
    ctx.page.redirect('/dashboard')
  } catch (error) {
    return alert(error.message)
  }


}