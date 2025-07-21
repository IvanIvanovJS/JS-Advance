
import { getUserData, showView, updateNav, URLs } from "./utils.js"
import { showEditView } from "./edit.js"
import { showDeleteView } from "./delete.js"
const section = document.createElement("section")
section.classList.add("details-view")

export function showDetailView(recipeID) {


    getRecipeDetails(recipeID)
    showView(section);
    updateNav()
}
async function getRecipeDetails(recipeID) {

    const response = await fetch(URLs.recipes + `/${recipeID}`)
    const data = await response.json()

    createRecipesPreview(data)
}


function createRecipesPreview(recipeInfo) {

    const element = document.createElement("article")
    element.classList.add("preview")
    element.innerHTML =
        `<h2>${recipeInfo.name}</h2>
          
        <div class="band">
            <div class="thumb">
                <img src = "${recipeInfo.img}">
            </div>
            <div class="ingredients">
                <h3>Ingredients:</h3>
                <ul>
                    ${recipeInfo.ingredients.map(x => `<li>${x}</li>`).join(``)}
                </ul>
            </div>
         </div>
     <div class="description">
        <h3>Preparation:</h3>
      ${recipeInfo.steps.map(s => `<p>${s}</p>`).join(``)}
          
            <div class="button-wrapper">
                <button id="edit-btn">✎ Edit</button>
                 <button id="delete-btn">✖ Delete</button>
           
          </div>
     </div>
       `

    const buttonsRef = element.querySelector(".button-wrapper");

    if (!getUserData()) {
        buttonsRef.style.display = "none"
    } else {

        if (getUserData().id !== recipeInfo._ownerId) {
            buttonsRef.style.display = "none"
        } else {
            buttonsRef.style.display = "block"
            const editBtn = buttonsRef.querySelector("#edit-btn")
            const deleteBtn = buttonsRef.querySelector("#delete-btn")

            const details = {
                name: recipeInfo.name,
                img: recipeInfo.img,
                ingredients: recipeInfo.ingredients,
                steps: recipeInfo.steps,
                _id: recipeInfo._id

            }
            editBtn.addEventListener("click", onEdit);
            deleteBtn.addEventListener("click", onDelete)
            function onEdit() {
                showEditView(details)
            }
            function onDelete() {
                showDeleteView(details)
            }
        }
    }
    section.replaceChildren(element)
}



