//dependancys
import page from "../node_modules/page/page.mjs"
import { render } from "../node_modules/lit-html/lit-html.js"


const root = document.querySelector("div.container")
//views
import { showDashboardView } from "./views/dashboard.js"
import { showMyFurniture } from "./views/myFurniture.js"
import { showCreateView } from "./views/create.js"
import { showLoginView } from "./views/login.js"
import { showRegisterView } from "./views/register.js"
import { onLogout } from "./views/logout.js"
import { showDetailsView } from "./views/details.js"
import { showEditDetails } from "./views/editDetails.js"
import { onDelete } from "./views/deleteDetails.js"
import { updateNav } from "./utility/navBar.js"
page(updateCTX)
page("/", showDashboardView)
page("/dashboard", showDashboardView)
page("/create", showCreateView)
page("/my-furniture", showMyFurniture)
page("/login", showLoginView)
page("/register", showRegisterView)
page("/logout", onLogout)
page("/details", showDetailsView)
page("/edit", showEditDetails)
page("/delete", onDelete)


page.start()

function updateCTX(ctx, next) {
    ctx.render = myRender;
    updateNav()
    next()
}
function myRender(temp) {
    render(temp, root)
}