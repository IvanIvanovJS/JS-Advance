import { showCatalogView } from "./catalog.js";
import { createRecipe } from "./data/recipes.js";
import { showLoginView } from "./login.js";
import { getUserData, showView } from "./utils.js";


const article = document.getElementById("create-view");
article.querySelector("form").addEventListener("submit", onCreate);


export function showCreateView() {
    if (!getUserData()) {
        return showLoginView();
    }
    showView(article)
}
async function onCreate(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")
    const img = formData.get("img")
    const ingredients = formData.get("ingredients").trim().split('\n')
    const steps = formData.get("steps").trim().split("\n")



    try {
        if (!name || !img || !ingredients || !steps) {
            throw new Error("All fields must be fulfilled")
        }
        createRecipe(name, img, ingredients, steps)

        showCatalogView()
    } catch (error) {
        alert(error.message)
    }


}