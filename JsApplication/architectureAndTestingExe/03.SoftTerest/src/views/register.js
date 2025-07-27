import { register } from "../api/requests.js";
import { navigate } from "../utils/nav.js";
import { getSection } from "./views.js";
import { showView } from "./views.js";

const section = getSection('[data-section="register"]')
function showRegisterView() {
    showView(section)
}
section.querySelector("form").addEventListener("submit", onRegister)
async function onRegister(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const { email, password, repeatPassword } = Object.fromEntries(formData)
    try {
        if (email.length < 3) throw new Error("The email should be at least 3 characters long")
        if (password.length < 3) throw new Error("The password should be at least 3 characters long")
        if (password !== repeatPassword) throw new Error("The repeat password should be equal to the password")
        const data = await register(email, password)

        if (data) {
            const userData = {
                email,
                id: data._id,
                accessToken: data.accessToken

            }
            localStorage.setItem("userData", JSON.stringify(userData))
            navigate("Home")
        }



    } catch (error) {
        alert(error.message)
    }


}
export {
    showRegisterView
}