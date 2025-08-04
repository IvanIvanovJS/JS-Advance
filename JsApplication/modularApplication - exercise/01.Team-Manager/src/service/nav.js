import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { getUserData } from "./userData.js";
const header = document.querySelector("header")

function updateNav() {
    render(navTemp(), header)
    const userData = getUserData()
    const user = header.querySelector("#user")
    const guest = header.querySelector("#guest")

    if (userData) {
        user.style.display = "inline"
        guest.style.display = "none"
    } else {
        user.style.display = "none"
        guest.style.display = "inline"
    }

}

function navTemp() {
    return html`
    <a href="/" class="site-logo">Team Manager</a>
    <nav>
        <a href="/browse" class="action">Browse Teams</a>
        <div id="guest">
            <a href="/login" class="action">Login</a>
            <a href="/register" class="action">Register</a>
        </div>
        <div id="user">
            <a href="/myteams" class="action">My Teams</a>
            <a href="/logout" class="action">Logout</a>
        </div>
    </nav>`
}

export {
    updateNav
}