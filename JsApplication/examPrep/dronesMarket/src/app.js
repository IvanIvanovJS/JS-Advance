import page from "../node_modules/page/page.mjs"
import { logout } from "./api/userService.js"

import { updateCTX } from "./service/render.js"
import { clearUserData } from "./service/userData.js"
import { showCatalog } from "./views/catalog.js"
import { showCreate } from "./views/create.js"
import { showDetails } from "./views/details.js"
import { showEdit } from "./views/edit.js"
import { showHome } from "./views/home.js"
import { showLogin } from "./views/login.js"
import { showRegister } from "./views/register.js"


page(updateCTX)


page(["/", "/index.html"], showHome)
page("/login", showLogin)
page("/register", showRegister)
page("/catalog", showCatalog)
page("/create", showCreate)
page("/details/:id", showDetails)
page("/edit/:id", showEdit)



page.start()

document.getElementById("logoutBtn").addEventListener("click", onLogout)
function onLogout() {
    logout()
    clearUserData()
    page.redirect("/")
}

