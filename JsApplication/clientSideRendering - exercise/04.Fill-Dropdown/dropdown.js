import { html, render } from "./node_modules/lit-html/lit-html.js";
const url = "http://localhost:3030/jsonstore/advanced/dropdown"
const menuRoot = document.getElementById("menu")
document.querySelector("form").addEventListener("submit", addItem)
async function loadItems() {
    const res = await fetch(url)
    const data = await res.json()
    const options = Object.values(data)
    render(optionsTemplate(options), menuRoot)

}
function optionsTemplate(options) {
    const template = options.map(option => html`<option value=${option._id}>${option.text}</option>`)
    return template
}
loadItems()

async function addItem(e) {
    e.preventDefault()
    const inputValue = document.querySelector("#itemText").value
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: inputValue })
    }
    const res = await fetch(url, options)
    if (res.ok == true) {
        loadItems()
    }

}