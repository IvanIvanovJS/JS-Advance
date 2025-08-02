import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { userUtility } from "./userUtils.js";
const userNav = document.getElementById("user")
const guestNav = document.getElementById("guest")
const themeSelect = document.querySelector(".theme")

export function updateNav() {
    themeSelect.addEventListener("change", onChange)
    render(themeTemp(), themeSelect)
    if (userUtility.getUserData()) {
        userNav.style.display = "inline-block"
        guestNav.style.display = "none"
    } else {
        userNav.style.display = "none"
        guestNav.style.display = "inline-block"
    }
}
function themeTemp() {
    return html`
    <option value="">->Select Theme&lt;-</option>
    <option  value="light">Light Theme</option>
    <option  value="dark">Dark Theme</option>
    `
}
function onChange() {
    const themeColor = this.value
    if (themeColor == "light") {
        lightTheme()
    } else {
        darkTheme()
    }

}
function lightTheme() {
    document.body.style.backgroundColor = "white"
    console.log("white");

}
function darkTheme() {
    document.body.style.backgroundColor = `#121212`
}