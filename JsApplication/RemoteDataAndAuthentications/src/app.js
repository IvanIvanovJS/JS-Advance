import { showCatalogView } from "./views/catalog.js"
import { showRegisterView } from "./views/register.js"
import { showLoginView } from "./views/login.js"
import { showCreateView } from "./views/create.js"
import { updateNav } from "./utils.js"
import { logout } from "./data/request.js"
import { initNav, navigate } from "./nav.js"
import { showDetailView } from "./views/details.js"
import { showEditView } from "./views/edit.js"
import { showDeleteView } from "./views/delete.js"

document.getElementById("section").replaceChildren()
document.getElementById("logoutBtn").addEventListener("click", () => {
    logout()
    sessionStorage.clear()
    navigate("catalog-link")
    updateNav()
})
const views = {
    "catalog-link": showCatalogView,
    "login-link": showLoginView,
    "register-link": showRegisterView,
    "create-link": showCreateView,
    "details": showDetailView,
    "editView": showEditView,
    "deleteView": showDeleteView
}
initNav(views)
updateNav()
navigate("catalog-link")
