function solution() {
    const URL = "http://localhost:3030/jsonstore/collections/books"
    document.getElementById("loadBooks").addEventListener("click", onLoad)
    const tbodyRef = document.querySelector("table tbody");
    const formRef = document.querySelector("form");
    formRef.addEventListener("submit", onSubmit);
    const titleInput = document.querySelector("input[name='title']")
    const authorInput = document.querySelector("input[name='author']")
    onLoad()
    async function onLoad() {
        const response = await fetch(URL);
        const data = await response.json()
        const records = Object.entries(data)
        tbodyRef.replaceChildren()
        for (const [id, { author, title }] of records) {
            const trCreate = document.createElement("tr")
            trCreate.dataset.id = id
            trCreate.innerHTML = `<td>${title}</td>
                <td>${author}</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
           `
            tbodyRef.appendChild(trCreate)

            const [editBtn, deleteBtn] = Array.from(trCreate.getElementsByTagName("button"))
            editBtn.addEventListener("click", onEdit)
            deleteBtn.addEventListener("click", onDelete)


        }
    }
    async function onSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target);
        const title = formData.get("title")
        const author = formData.get("author")
        if (!author || !title) {
            return
        }
        titleInput.value = ""
        authorInput.value = ""

        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ author, title })
        }
        await fetch(URL, options)
        onLoad()

    }
    function onEdit(event) {
        formRef.removeEventListener("submit", onSubmit);
        formRef.addEventListener("submit", editSubmit)
        const formH3 = formRef.querySelector('h3')
        formH3.textContent = "Edit FORM"
        const trRef = event.target.parentElement.parentElement
        const id = trRef.dataset.id;
        const [titleTd, authorTd] = Array.from(trRef.querySelectorAll("td"));
        titleInput.value = titleTd.textContent;
        authorInput.value = authorTd.textContent;
        const submitBtnRef = formRef.querySelector("button")
        submitBtnRef.textContent = "Save"

        async function editSubmit(event) {
            event.preventDefault()
            formH3.textContent = "FORM"
            formRef.addEventListener("submit", onSubmit);
            formRef.removeEventListener("submit", editSubmit)
            submitBtnRef.textContent = "Submit"
            const title = titleInput.value;
            const author = authorInput.value
            if (!title || !author) {
                return
            }
            titleInput.value = ""
            authorInput.value = ""

            const opitons = {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ author, title })
            }

            await fetch(URL + `/${id}`, opitons)

            onLoad()
        }
    }
    async function onDelete(event) {
        const trRef = event.target.parentElement.parentElement
        const id = trRef.dataset.id;
        if (!id) {
            return
        }
        const options = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        }
        await fetch(URL + `/${id}`, options)
        onLoad()
    }
}
solution()
/**<tr>
                <td>Harry Poter</td>
                <td>J. K. Rowling</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
            <tr>
                <td>Game of Thrones</td>
                <td>George R. R. Martin</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr> */