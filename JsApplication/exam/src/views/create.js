import { html } from "../../node_modules/lit-html/lit-html.js";
import { createTip } from "../api/dataService.js";

import { createSubmitHandler } from "../service/formService.js";
import { notify } from "../service/nothify.js";

const temp = (ctx) => html`<section id="create">
        <div class="form form-item">
          <h2>Share Your Tip</h2>
          <form class="create-form" @submit=${createSubmitHandler(onSubmit.bind(null, ctx))}>
            <input type="text" name="title" id="title" placeholder="Title" />
            <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" />
            <input type="text" name="type" id="type" placeholder="Type" />
            <select name="difficulty" id="difficulty">
              <option value="" disabled selected>Difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="50"></textarea>
            <button type="submit">Add</button>
          </form>
        </div>
      </section>`
export function showCreate(ctx) {
    ctx.render(temp(ctx))
}

async function onSubmit(ctx, data) {

    const {
        title,
        imageUrl,
        type,
        difficulty,
        description
    }
        = data

    try {
        if (!title || !type || !difficulty || !description || !imageUrl) {
            throw new Error("All fields are reqierd!")
        }
        await createTip({
            title,
            imageUrl,
            type,
            difficulty,
            description
        }
        )
        ctx.page.redirect('/catalog')
    } catch (error) {
        return notify(error.message)
    }


}