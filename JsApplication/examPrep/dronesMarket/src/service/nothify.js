
export function notify(msg) {
    const errorBox = document.getElementById("errorBox")
    const errorMsg = errorBox.querySelector(".msg")

    errorMsg.textContent = msg
    errorBox.style.display = "block"
    setTimeout(hide, 3000)
}

function hide() {
    const errorBox = document.getElementById("errorBox")
    errorBox.style.display = "none"
}