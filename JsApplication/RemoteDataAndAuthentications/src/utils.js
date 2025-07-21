const main = document.querySelector("main")
let userData = null;

export function showView(view) {
    main.replaceChildren(view)
}

export function navigation(event, callback) {
    event.preventDefault();
    callback();

}
export const URLs = {

    recipes: "http://localhost:3030/data/recipes",
    login: "http://localhost:3030/users/login",
    register: 'http://localhost:3030/users/register',


}

export function getUserData() {
    return userData
}

export function updateNav() {
    userData = JSON.parse(sessionStorage.getItem("userData"))
    if (userData) {
        document.getElementById("guest").style.display = "none"
        document.getElementById("user").style.display = "inline-block"

    } else {
        document.getElementById("user").style.display = "none"
        document.getElementById("guest").style.display = "inline-block"
    }
}