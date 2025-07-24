import { editRecipeById } from "../data/recipes.js";
import { navigate } from "../nav.js";


export function showEditView(details) {
    const section = document.createElement("section");
    section.innerHTML = ` <article id="edit-view">
            <h2>Edit Recipe</h2>
            <form>
                <label>Name: <input type="text" name="name" placeholder="Recipe name" value="${details.name}"></label>
                <label>Image: <input type="text" name="img" placeholder="Image URL" value="${details.img}"></label>
                <label class="ml">Ingredients: <textarea name="ingredients"
                        placeholder="Enter ingredients on separate lines">${details.ingredients.join("\n")}</textarea></label>
                <label class="ml">Preparation: <textarea name="steps"
                        placeholder="Enter preparation steps on separate lines">${details.steps.join("\n")}</textarea></label>
                <input type="submit" value="Update Recipe">
            </form>
        </article>`
    section.querySelector("form").addEventListener("submit", (event) => onEdit(event));


    return section


    async function onEdit(event) {
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
            editRecipeById(details._id, name, img, ingredients, steps)

            navigate("details", details._id)
        } catch (error) {
            alert(error.message)
        }


    }
}

