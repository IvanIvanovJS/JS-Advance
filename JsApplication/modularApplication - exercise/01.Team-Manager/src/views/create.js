import { html } from "../../node_modules/lit-html/lit-html.js";
import { createTeam } from "../api/dataService.js";
import { formSubmitHandler } from "../service/formService.js";

function showCreate(ctx) {

    ctx.render(createTemp(ctx))
}

function createTemp(ctx) {
    return html`
    <section id="create">
                <article class="narrow">
                    <header class="pad-med">
                        <h1>New Team</h1>
                    </header>
                    <form @submit=${(e) => onSubmit(e, ctx)}="create-form" class="main-form pad-large">
                        <div class="error" style="display: none">Error message.</div>
                        <label>Team name: <input type="text" name="name"></label>
                        <label>Logo URL: <input type="text" name="logoUrl"></label>
                        <label>Description: <textarea name="description"></textarea></label>
                        <input class="action cta" type="submit" value="Create Team">
                    </form>
                </article>
            </section>`
}

async function onSubmit(e, ctx) {
    const { name, logoUrl, description } = formSubmitHandler(e)
    const errorRef = e.currentTarget.querySelector(".error")
    errorRef.style.display = "none"
    try {
        if (name.length < 4) {
            throw new Error("Team name must be at least 4 characters!")
        }
        if (!logoUrl) {
            throw new Error("URL requierd!")
        }
        if (description < 10) {
            throw new Error("Description must be at least 10 characters!")
        }

        const data = await createTeam({ name, logoUrl, description })
        const id = data._id

        ctx.page.redirect(`/details/${id}`)
    } catch (error) {
        errorRef.style.display = "block"
        return errorRef.textContent = error.message
    }

}

export {
    showCreate
}