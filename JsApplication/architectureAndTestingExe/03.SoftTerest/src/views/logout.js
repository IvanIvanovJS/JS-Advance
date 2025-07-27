import { logout } from "../api/requests.js";
import { navigate } from "../utils/nav.js";
import { getSection } from "./views.js";

const section = getSection('[data-section="login"]')
export function onLogout() {
    try {

        logout()
        sessionStorage.clear()
        localStorage.clear()
        document.body.replaceChildren(section)

    } catch (error) {
        alert(error.message)
    }

}