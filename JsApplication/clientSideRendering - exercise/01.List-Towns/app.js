import { html, render } from "./node_modules/lit-html/lit-html.js"

const formRef = document.querySelector("form")
const root = document.querySelector("#root")
formRef.addEventListener("submit", onSubmit)

function onSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const { towns } = Object.fromEntries(formData)
    console.log(towns);
    const towns1 = towns.split(", ").map(town => townTemplate(town))
    console.log(towns1);

    render(renderTowns(towns1), root)

}
function renderTowns(towns) {
    return html`
    <ul>
        ${towns}
    </ul>`

}
function townTemplate(town) {
    return html`
    <li>${town}</li>
    `

}