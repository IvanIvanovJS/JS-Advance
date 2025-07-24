const main = document.querySelector("main")


export function showView(view) {
    main.replaceChildren(view)
}

export function navigation(event, callback) {
    event.preventDefault();
    callback();

}

export function getUserData() {
    return JSON.parse(sessionStorage.getItem("userData"))
}

export function updateNav() {

    if (getUserData()) {
        document.getElementById("guest").style.display = "none"
        document.getElementById("user").style.display = "inline-block"

    } else {
        document.getElementById("user").style.display = "none"
        document.getElementById("guest").style.display = "inline-block"
    }
}