import { html, nothing } from "../../node_modules/lit-html/lit-html.js"
import { deleteTipById, getTipById } from "../api/dataService.js"
import { getUserData } from "../service/userData.js"

const temp = (data, onDelete, isOwner) => html`<section id="details">
        <div id="details-wrapper">
          <div>
            <img id="details-img" src="${data.imageUrl}" alt="example1" />
            <p id="details-title">${data.title}</p>
          </div>
          <div id="info-wrapper">
            <div id="details-description">
              <p class="details-type">Type: ${data.type}</p>
              <p class="details-difficulty">
                Difficulty: ${data.difficulty}
              </p>
              <p id="tip-description">
                ${data.description}
              </p>
            </div>
            <!--Edit and Delete are only for creator-->
           ${isOwner ? html`<div id="action-buttons">
              <a href="/edit/${data._id}" id="edit-btn">Edit</a>
              <a href="javascript:void(0)"  id="delete-btn" @click=${onDelete}>Delete</a>
            </div>` : nothing} 
          </div>
        </div>
      </section>`


export async function showDetails(ctx) {
  const id = ctx.params.id
  const data = await getTipById(id)
  const isOwner = data._ownerId == getUserData()?.id
  ctx.render(temp(data, onDelete, isOwner))

  async function onDelete() {
    const choise = confirm(`The following tip will be deleted.\nAre you sure DELETING ${data.title}?`)
    if (choise) {
      await deleteTipById(id)
      ctx.page.redirect("/catalog")
    }


  }
}

