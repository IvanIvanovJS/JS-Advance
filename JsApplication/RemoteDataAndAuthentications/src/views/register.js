import { register } from "../data/request.js";
import { navigate } from "../nav.js";
import { updateNav } from "../utils.js";

const article = document.getElementById("register-view")
article.querySelector("form").addEventListener("submit", onRegister)
export function showRegisterView() {
    return article
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


        const data = await register(email, password)
        const userData = {
            email,
            id: data._id,
            accessToken: data.accessToken
        }
        sessionStorage.setItem("userData", JSON.stringify(userData))
        navigate("catalog-link")
        updateNav()

    } catch (error) {
        alert(error.message)
    }




}