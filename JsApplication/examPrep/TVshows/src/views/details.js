import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { deleteMovieById, getMovieById } from "../api/dataService.js";
import { getUserData } from "../service/userData.js";

const temp = (data, isOwner, onDelete) => html`
            <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${data.imageUrl} alt="example1" />
            <div id="details-text">
              <p id="details-title">${data.title}</p>
              <div id="info-wrapper">
                <div id="description">
                  <p id="details-description">
                    ${data.details}
                  </p>
                </div>
              </div>


              <!--Edit and Delete are only for creator-->
              ${isOwner ? html`<div id="action-buttons">
                <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>
              </div>` : nothing}

            </div>
          </div>
        </section>`
export async function showDetails(ctx) {
    const id = ctx.params.id
    const data = await getMovieById(id)
    const userData = getUserData()
    const isOwner = data._ownerId == userData?.id
    ctx.render(temp(data, isOwner, onDelete))
    async function onDelete() {
        const choice = confirm(`Are you sure deleting ${data.title}?`)
        if (choice) {
            await deleteMovieById(id)
            ctx.page.redirect("/browse")
        }


    }
}

