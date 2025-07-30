import { html, render } from "./node_modules/lit-html/lit-html.js"
const url = "http://localhost:3030/jsonstore/collections/books"
const tableRoot = document.getElementById("tableRoot")
const formRoot = document.getElementById("formRoot")

loadCatalog()
async function loadCatalog() {
    render(tableTemplate(), tableRoot)
    document.querySelector("#loadBooks").addEventListener("click", loadAllBooks)
    render(formTemplate(), formRoot)
    document.querySelector("form").addEventListener("submit", addBook)
}
async function loadAllBooks() {
    const response = await fetch(url)
    const data = await response.json();
    const records = Object.entries(data)

    render(records.map(r => bookTemplate(r)), document.querySelector("tbody"))

}

async function addBook(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const { title, author } = Object.fromEntries(formData)
    if (!title || !author) {
        return;
    }
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, author })
    }
    await fetch(url, options)
    e.target.reset()
    loadAllBooks()
}

function formTemplate() {
    return html`
    <form id="add-form">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>`
}
function tableTemplate() {
    return html`
    <button id="loadBooks">LOAD ALL BOOKS</button>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
           
        </tbody>
    </table>
   `
}

function bookTemplate(record) {
    return html`
    <tr>
                <td>${record[1].title}</td>
                <td>${record[1].author}</td>
                <td data-id=${record[0]}>
                    <button @click=${onEdit}>Edit</button>
                    <button @click=${onDelete}>Delete</button>
                </td>
            </tr>
    `
}
function editTemplate(data) {
    return html`
    <form id="edit-form" @submit=${onSave}>
        <input type="hidden" name="id" value=${data._id}>
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title..." value=${data.title}>
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author..." value=${data.author}>
        <input type="submit" value="Save">
    </form>
    `
}
async function onSave(e) {
    e.preventDefault();
    const formData = new FormData(e.target)
    const { id, title, author } = Object.fromEntries(formData);
    if (!title, !author) {
        return;
    }
    const options = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id: id, title, author })
    }
    await fetch(url + `/${id}`, options)
    loadAllBooks()
}
async function onEdit(e) {
    const id = e.target.parentElement.dataset.id
    const res = await fetch(url + `/${id}`)
    const data = await res.json()
    console.log(data);

    render(editTemplate(data), formRoot)
}
async function onDelete(e) {
    const id = e.target.parentElement.dataset.id
    const options = {
        method: "DELETE",
    }
    await fetch(url + `/${id}`, options)
    loadAllBooks()
}