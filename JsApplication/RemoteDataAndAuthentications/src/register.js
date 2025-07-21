import { showCatalogView } from "./catalog.js";
import { showView, updateNav, URLs } from "./utils.js";

const article = document.getElementById("register-view")
article.querySelector("form").addEventListener("submit", onRegister)
export function showRegisterView() {
    showView(article)
}
async function onRegister(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");
    const rePass = formData.get("rePass");

    try {
        if (!email) {
            throw new Error("Email is required")
        }
        if (password !== rePass) {
            throw new Error("Passwords must match!")
        }
        if (password.length < 3) {
            throw new Error("Password must be at least 3 characters")
        }

        const options = {
            method: 'post',
            headers: { 'Content-Type': 'aplication/json' },
            body: JSON.stringify({ email, password })
        }
        const response = await fetch(URLs.register, options)
        if (response.ok !== true) {
            const err = await response.json()
            throw err
        }
        const data = await response.json();
        const userData = {
            id: data._id,
            accessToken: data.accessToken
        }
        sessionStorage.setItem("userData", JSON.stringify(userData))
        showCatalogView()
        updateNav()

    } catch (error) {
        alert(error.message)
    }




}