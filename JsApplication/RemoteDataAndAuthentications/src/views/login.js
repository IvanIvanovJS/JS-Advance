import { login } from "../data/request.js";
import { updateNav } from "../utils.js";
import { navigate } from "../nav.js";
const article = document.getElementById("login-view")
article.querySelector("form").addEventListener("submit", loginOn);
export function showLoginView() {
    return article;
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
        navigate("catalog-link")

    } catch (error) {
        alert(error.message)
    }

}