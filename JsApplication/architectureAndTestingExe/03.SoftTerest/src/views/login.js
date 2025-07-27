import { login } from "../api/requests.js";
import { navigate } from "../utils/nav.js";
import { getSection, showView } from "./views.js";
const section = getSection('[data-section="login"]')
function showLoginView() {
    showView(section)
}

section.querySelector("form").addEventListener("submit", onLogin)

async function onLogin(e) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const { email, password } = Object.fromEntries(formData)
    try {
        const data = await login(email, password)
        if (data) {
            const userData = {
                email,
                id: data._id,
                accessToken: data.accessToken

            }
            localStorage.setItem("userData", JSON.stringify(userData))
            section.querySelector("form").reset()
            navigate("Home")

        }
    }
    catch (error) {
        alert(error.message)
    }
}

export {
    showLoginView
}