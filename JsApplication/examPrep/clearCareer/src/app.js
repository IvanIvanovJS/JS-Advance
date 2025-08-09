import page from "../node_modules/page/page.mjs"
import { logout } from "./api/userService.js"
import { render } from "../node_modules/lit-html/lit-html.js"
import { clearUserData, getUserData } from "./service/userData.js"
import { showDashobard } from "./views/browse.js"
import { showCreate } from "./views/create.js"
import { showDetails } from "./views/details.js"
import { showEdit } from "./views/edit.js"
import { showHome } from "./views/home.js"
import { showLogin } from "./views/login.js"
import { showRegister } from "./views/register.js"
import { showSearch } from "./views/search.js"

const root = document.querySelector("main")


page(updateCTX)

page("/", showHome)
page("/login", showLogin)
page("/register", showRegister)
page("/dashboard", showDashobard)
page("/details/:id", showDetails)
page("/edit/:id", showEdit)
page("/create", showCreate)
page("/search", showSearch)
document.querySelector("#logoutBtn").addEventListener("click", onLogout)
page.start()


function onLogout() {
    logout()
    clearUserData()
    page.redirect("/")
}
function updateNav() {
    const userData = getUserData()
    const guest = document.querySelector(".guest")
    const user = document.querySelector(".user")
    if (userData) {
        user.style.display = "block"
        guest.style.display = "none"
    } else {
        user.style.display = "none"
        guest.style.display = "block"
    }

}

function myRender(temp) {
    return render(temp, root)
}

function updateCTX(ctx, next) {
    ctx.render = myRender;
    updateNav()
    next()
}
