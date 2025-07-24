
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