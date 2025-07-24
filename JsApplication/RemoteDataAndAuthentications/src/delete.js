import { deleteRecipeById } from "./data/recipes.js";
import { updateNav, showView } from "./utils.js";

export function showDeleteView(details) {
    deleteRequest()
    async function deleteRequest() {
        try {
            deleteRecipeById(details._id)

            const article = document.createElement("article")
            article.classList.add("preview")
            const h2 = document.createElement("h2")
            h2.textContent = "Recipe Deleted"
            article.appendChild(h2)
            showView(article)
            updateNav()

        } catch (error) {
            alert(error.message)
        }

    }
}