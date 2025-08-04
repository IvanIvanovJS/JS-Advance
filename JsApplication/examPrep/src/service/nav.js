import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { getUserData } from "./userData.js";
const header = document.querySelector("header")

function updateNav() {
  render(navTemp(), header)
  const userData = getUserData()
  const user = header.querySelector(".user")
  const guest = header.querySelector(".guest")

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
    <section id="notifications">
    <div id="errorBox" class="notification">
      <span class="msg">MESSAGE</span>
    </div>
  </section>
   <a id="logo" href="/"><img id="logo" src="/images/logo2.png" alt="img" /></a>
    <nav>
      <div>
        <a href="/catalog">Marketplace</a>
      </div>

      <!-- Logged-in users -->
      <div class="user">
        <a href="/create">Sell</a>
        <a href="javascript:void(0)" id="logoutBtn">Logout</a>
      </div>

      <!-- Guest users -->
      <div class="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    </nav>`
}

export {
  updateNav
}