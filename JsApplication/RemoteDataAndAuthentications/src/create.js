import { showCatalogView } from "./catalog.js";
import { showLoginView } from "./login.js";
import { getUserData, showView, URLs } from "./utils.js";


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
        const userData = getUserData()

        const options = {
            method: "post",
            headers: { "Content-type": "aplication/json", "X-Authorization": userData.accessToken },
            body: JSON.stringify({ name, img, ingredients, steps })
        }

        const response = await fetch(URLs.recipes, options)
        if (response.ok !== true) {
            const err = await response.json()
            return err;
        }

        showCatalogView()
    } catch (error) {
        alert(error.message)
    }


}