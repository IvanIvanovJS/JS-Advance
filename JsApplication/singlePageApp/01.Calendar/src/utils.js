const body = document.querySelector("body")

export function showView(view) {
    body.replaceChildren(view)
}
