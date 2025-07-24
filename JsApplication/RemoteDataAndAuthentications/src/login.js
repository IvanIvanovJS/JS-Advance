
import { showCatalogView } from "./catalog.js";
import { login } from "./data/request.js";
import { showView, updateNav } from "./utils.js";
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
        const data = await login(email, password)

        const userData = {
            id: data._id,
            accessToken: data.accessToken
        }
        sessionStorage.setItem("userData", JSON.stringify(userData))
        updateNav()
        showCatalogView()

    } catch (error) {
        alert(error.message)
    }

}