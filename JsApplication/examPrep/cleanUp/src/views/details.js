import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { addLikes, deleteSolutionById, getAllLikes, getSolutionById, isUserLiked } from "../api/dataService.js";
import { getUserData } from "../service/userData.js";

const temp = (data, isOwner, onDelete, onLike, userData, likes, isLiked) => html`
          <section id="details">
          <div id="details-wrapper">
            <img
              id="details-img"
              src="${data.imageUrl}"
              alt="example1"
            />
            <div>
              <p id="details-type">${data.type}</p>
              <div id="info-wrapper">
                <div id="details-description">
                  <p id="description">
                   ${data.description}
                  </p>
                  <p id="more-info">
                   ${data.learnMore}
                  </p>
                </div>
              </div>
              <h3>Like Solution:<span id="like">${likes}</span></h3>

              <!--Edit and Delete are only for creator-->
             ${isOwner ? html`<div id="action-buttons">
                <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a> 
                </div>` : nothing} 
              <!--Bonus - Only for logged-in users ( not authors )-->
            
                ${(userData && !isOwner && !isLiked) ? html`
                  <div id="action-buttons">
                  <a href="javascript:void(0)" id="like-btn" @click=${onLike}>Like</a>
                  </div>` : nothing}
                
              
            </div>
          </div>
        </section>`
export async function showDetails(ctx) {

  const id = ctx.params.id
  debugger
  const data = await getSolutionById(id)
  const userData = getUserData()
  const isOwner = data._ownerId == userData?.id
  let likes = await getAllLikes(id)
  let isLiked = await isUserLiked(id, userData?.id)

  ctx.render(temp(data, isOwner, onDelete, onLike, userData, likes, isLiked))

  async function onDelete() {
    const choice = confirm(`Are you sure deleting ${data.type}?`)
    if (choice) {
      await deleteSolutionById(id)
      ctx.page.redirect("/dashboard")
    }

  }
  async function onLike() {
    await addLikes({ solutionId: id })
    likes = await getAllLikes(id)
    isLiked = await isUserLiked(id, userData.id)

    ctx.render(temp(data, isOwner, onDelete, onLike, userData, likes, isLiked))
  }


}

