import page from "../node_modules/page/page.mjs"
import { updateNav } from "./service/nav.js"
import { render } from "../node_modules/lit-html/lit-html.js";
import { showHome } from "./views/home.js";
import { showBrowse } from "./views/browse.js";
import { showRegister } from "./views/register.js";
import { showLogin } from "./views/login.js";
import { onLogout } from "./views/logout.js";
import { showTeam } from "./views/team.js";

const root = document.querySelector("main")
page(updateCTX)
page(["/", "/index.html"], showHome)
page("/browse", showBrowse)
page("/register", showRegister)
page("/login", showLogin)
page("/logout", onLogout)
page("/myteams", showTeam)
page.start()


function updateCTX(ctx, next) {
    ctx.render = myRender;
    updateNav()
    next()
}
function myRender(temp) {
    render(temp, root)
}