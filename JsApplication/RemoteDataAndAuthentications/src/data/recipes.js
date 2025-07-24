import { request, URLs } from "./request.js"
import { getUserData } from "../utils.js"
export async function getlAllRecipes() {
    return await request("GET", URLs.recipes)
}
export async function getRecipeById(id) {
    return await request("GET", URLs.recipes + `/${id}`)
}
export async function createRecipe(name, img, ingredients, steps) {
    return await request("POST", URLs.recipes, { "Content-type": "aplication/json", "X-Authorization": getUserData().accessToken }, { name, img, ingredients, steps })
}
export async function editRecipeById(id, name, img, ingredients, steps) {
    return await request("PUT", URLs.recipes + `/${id}`, { "Content-type": "aplication/json", "X-Authorization": getUserData().accessToken }, { name, img, ingredients, steps })
}
export async function deleteRecipeById(id) {
    return await request("DELETE", URLs.recipes + `/${id}`, { "X-Authorization": getUserData().accessToken })
}