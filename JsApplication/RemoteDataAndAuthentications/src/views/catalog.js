import { getlAllRecipes } from "../data/recipes.js"
import { navigate } from "../nav.js"

const section = document.getElementById("catalog-view")

export function showCatalogView() {
    loadRecipes()
    return section
}
let recipesData = null;
async function loadRecipes() {
    const pCreate = document.createElement("p")
    pCreate.textContent = "Loading..."
    pCreate.style.color = "white"
    section.replaceChildren(pCreate)

    recipesData = await getlAllRecipes()

    showRecipes(recipesData)
}


function showRecipes(recipes) {
    section.replaceChildren(...recipes.map(createRecipesPreview))
}

function createRecipesPreview(recipe) {
    const element = document.createElement('article')
    element.className = "preview"
    element.innerHTML = `<div class="title">
                             <h2>${recipe.name}</h2>
                        </div>
                        <div class="small">
                            <img src = "${recipe.img}">
                        </div>`

    element.addEventListener("click", onClick)


    function onClick() {
        navigate("details", recipe._id)
    }
    return element

}

