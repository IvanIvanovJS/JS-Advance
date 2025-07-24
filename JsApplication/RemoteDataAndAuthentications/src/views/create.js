
import { createRecipe } from "../data/recipes.js";
import { navigate } from "../nav.js";
import { getUserData, updateNav } from "../utils.js";


const article = document.getElementById("create-view");
article.querySelector("form").addEventListener("submit", onCreate);


export function showCreateView() {
    if (!getUserData()) {
        navigate("login-link")
        updateNav()
        return

    }
    return article
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

        navigate("catalog-link")
    } catch (error) {
        alert(error.message)
    }


}