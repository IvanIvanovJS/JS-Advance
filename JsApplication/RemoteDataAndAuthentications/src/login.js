import { showCatalogView } from "./catalog.js";
import { showView, updateNav, URLs } from "./utils.js";
const article = document.getElementById("login-view")
article.querySelector("form").addEventListener("submit", loginOn);
export function showLoginView() {
    showView(article)
}
async function loginOn(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")
    const password = formData.get("password")
    try {
        if (!email || !password) {
            return;
        }


        const options = {
            method: "post",
            headers: { "Content-Type": "aplication/json" },
            body: JSON.stringify({ email, password })
        }

        const response = await fetch(URLs.login, options)

        if (response.ok !== true) {
            const err = await response.json();
            throw err;
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