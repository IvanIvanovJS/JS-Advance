import { showCatalogView } from "./catalog.js"
import { showRegisterView } from "./register.js"
import { showLoginView } from "./login.js"
import { showCreateView } from "./create.js"
import { navigation, updateNav } from "./utils.js"

document.getElementById("section").replaceChildren()
document.getElementById("logoutBtn").addEventListener("click", () => {
    sessionStorage.clear()
    showCatalogView()
    updateNav()
})
updateNav()

document.getElementById("catalog-link").addEventListener("click", (event) => navigation(event, showCatalogView))
document.getElementById("login-link").addEventListener("click", (event) => navigation(event, showLoginView))
document.getElementById("register-link").addEventListener("click", (event) => navigation(event, showRegisterView))
document.getElementById("create-link").addEventListener("click", (event) => navigation(event, showCreateView))

showCatalogView()
