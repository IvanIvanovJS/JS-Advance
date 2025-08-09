import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { applyForJob, deleteById, countAllOffers, getOfferById, isUserApplyed } from "../api/dataService.js";
import { getUserData } from "../service/userData.js";

const temp = (data, isOwner, onDelete, onApply, userData, offers, isApplyed) => html`
          <section id="details">
          <div id="details-wrapper">
          <img id="details-img" src="${data.imageUrl}" alt="example1" />
          <p id="details-title">${data.title}</p>
          <p id="details-category">
            Category: <span id="categories">${data.category}</span>
          </p>
          <p id="details-salary">
            Salary: <span id="salary-number">${data.salary}</span>
          </p>
          <div id="info-wrapper">
            <div id="details-description">
              <h4>Description</h4>
              <span>${data.description}</span>
            </div>
            <div id="details-requirements">
              <h4>Requirements</h4>
              <span>${data.requirements}</span>
            </div>
          </div>
            <p>Applications: <strong id="applications">${offers}</strong></p>

              <!--Edit and Delete are only for creator-->
             ${isOwner ? html`<div id="action-buttons">
                <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a> 
                </div>` : nothing} 
              <!--Bonus - Only for logged-in users ( not authors )-->
            
                ${(userData && !isOwner && !isApplyed) ? html`
                  <div id="action-buttons">
                   <a href="" id="apply-btn"  @click=${onApply}>Apply</a>
                  </div>` : nothing}
                
              
            </div>
          </div>
        </section>`
export async function showDetails(ctx) {

  const id = ctx.params.id

  const data = await getOfferById(id)
  const userData = getUserData()
  const isOwner = data._ownerId == userData?.id
  let offers = await countAllOffers(id)
  let isApplyed = await isUserApplyed(id, userData?.id)

  ctx.render(temp(data, isOwner, onDelete, onApply, userData, offers, isApplyed))

  async function onDelete() {
    const choice = confirm(`Are you sure deleting ${data.title} offer?`)
    if (choice) {
      await deleteById(id)
      ctx.page.redirect("/dashboard")
    }

  }
  async function onApply() {
    await applyForJob({ offerId: id })
    offers = await countAllOffers(id)
    isApplyed = await isUserApplyed(id, userData.id)

    ctx.render(temp(data, isOwner, onDelete, onApply, userData, offers, isApplyed))
  }


}

