import { deleteRecipeById } from "../data/recipes.js";
import { updateNav } from "../utils.js";

export function showDeleteView(details) {

    try {
        deleteRecipeById(details._id)
        const article = document.createElement("article")
        article.classList.add("preview")
        const h2 = document.createElement("h2")
        h2.textContent = "Recipe Deleted"
        article.appendChild(h2)
        updateNav()

        return article


    } catch (error) {
        alert(error.message)
    }


}