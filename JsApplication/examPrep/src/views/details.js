import { html, nothing } from "../../node_modules/lit-html/lit-html.js"
import { deleteDroneById, getDroneById } from "../api/dataService.js"
import { getUserData } from "../service/userData.js"

const temp = (data, onDelete, isOwner) => html`<section id="details">
        <div id="details-wrapper">
          <div>
            <img id="details-img" src=${data.imageUrl} alt="example1" />
            <p id="details-model">${data.model}</p>
          </div>
          <div id="info-wrapper">
            <div id="details-description">
              <p class="details-price">Price: €${data.price}</p>
              <p class="details-condition">Condition: ${data.condition}</p>
              <p class="details-weight">Weight: ${data.weight}g</p>
              <p class="drone-description">
                ${data.description}
              </p>
              <p class="phone-number">Phone: ${data.phone}</p>
            </div>
            <!--Edit and Delete are only for creator-->
          ${isOwner ? html`<div class="buttons">
              <a href="/edit/${data._id}" id="edit-btn">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
            </div>` : nothing}  
          </div>
        </div>
      </section>`


export async function showDetails(ctx) {
    const id = ctx.params.id
    const data = await getDroneById(id)
    const isOwner = data._ownerId == getUserData()?.id
    ctx.render(temp(data, onDelete, isOwner))

    async function onDelete() {
        const choise = confirm(`The following offer will be deleted.\nAre you sure DELETING ${data.model}!`)
        if (choise) {
            await deleteDroneById(id)
            ctx.page.redirect("/catalog")
        }


    }
}

