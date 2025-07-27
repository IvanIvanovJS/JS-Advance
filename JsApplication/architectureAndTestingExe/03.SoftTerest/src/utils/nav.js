import { getUserData } from "./userdata.js"


const nav = document.querySelector("nav")
const aLink = nav.querySelectorAll("a")
const footer = document.querySelector("footer")
function showNavBar() {

    aLink.forEach(a => {
        a.style.display = "none"
        if (a.className === "navbar-brand") a.style.display = "block"
        if (a.textContent === "Dashboard") a.style.display = "block"
        if (getUserData()) {
            if (a.textContent === "Create") a.style.display = "block"
            if (a.textContent === "Logout") a.style.display = "block"
        } else {
            if (a.textContent === "Login") a.style.display = "block"
            if (a.textContent === "Register") a.style.display = "block"
        }
    })
    return nav

}
let views = {}
async function navigate(text) {
    const view = views[text]
    if (typeof view == "function") {
        return view()
    }
}

function initNav(initViews) {
    views = initViews
    nav.addEventListener("click", (e) => {
        e.preventDefault()
        let text = e.target.textContent;
        if (e.target.tagName == "IMG") text = "Home"
        navigate(text)

    })

}
function showFooter() {
    return footer
}
export {
    showNavBar,
    showFooter,
    initNav,
    navigate
}