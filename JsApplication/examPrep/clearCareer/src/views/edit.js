import { html } from "../../node_modules/lit-html/lit-html.js";
import { editSolutionById, getOfferById } from "../api/dataService.js";

import { createSubmitHandler } from "../service/formService.js";

const temp = (ctx, data) => html` <section id="edit">
        <div class="form">
          <h2>Edit Offer</h2>
          <form class="edit-form" @submit=${createSubmitHandler(onSubmit.bind(null, ctx, data._id))}>
            <input type="text" name="title" id="job-title" placeholder="Title" .value=${data.title} />
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" .value=${data.imageUrl} />
            <input type="text" name="category" id="job-category" placeholder="Category"  .value=${data.category} />
            <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50"  .value=${data.description} ></textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
              cols="50" .value=${data.requirements} ></textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary"  .value=${data.salary} />

            <button type="submit">post</button>
          </form>
        </div>
      </section>`
export async function showEdit(ctx) {
  const id = ctx.params.id
  const data = await getOfferById(id)
  ctx.render(temp(ctx, data, id))
}

async function onSubmit(ctx, id, form) {

  const { title,
    imageUrl,
    category,
    description,
    requirements,
    salary
  } = form


  try {
    if (!title || !description || !category || !imageUrl || !requirements || !salary) {
      throw new Error("All fields are reqierd!")
    }
    await editSolutionById(id, {
      title,
      imageUrl,
      category,
      description,
      requirements,
      salary
    })
    ctx.page.redirect(`/details/${id}`)
  } catch (error) {
    return alert(error.message)
  }


}