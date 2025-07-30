import { userUtility } from "./userUtils.js";
const userNav = document.getElementById("user")
const guestNav = document.getElementById("guest")
export function updateNav() {

    if (userUtility.getUserData()) {
        userNav.style.display = "inline-block"
        guestNav.style.display = "none"
    } else {
        userNav.style.display = "none"
        guestNav.style.display = "inline-block"
    }
}