import page from "../node_modules/page/page.mjs"
import { logout } from "./api/userService.js"
import { updateCTX } from "./service/render.js"
import { clearUserData } from "./service/userData.js"
import { showBrowser } from "./views/browse.js"
import { showCreate } from "./views/create.js"
import { showDetails } from "./views/details.js"
import { showEdit } from "./views/edit.js"
import { showHome } from "./views/home.js"
import { showLogin } from "./views/login.js"
import { showRegister } from "./views/register.js"
import { showSearch } from "./views/search.js"


page(updateCTX)

page(["/", "/index.html"], showHome)
page("/login", showLogin)
page("/register", showRegister)
page("/browse", showBrowser)
page("/details/:id", showDetails)
page("/edit/:id", showEdit)
page("/create", showCreate)
page("/search", showSearch)

page.start()
document.querySelector("#logoutBtn").addEventListener("click", onLogout)

function onLogout() {
    logout()
    clearUserData()
    page.redirect("/")
}
