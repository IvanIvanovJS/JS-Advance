function attachEvents() {
    const URL = "http://localhost:3030/jsonstore/phonebook"
    document.getElementById("btnLoad").addEventListener("click", onLoad)
    document.getElementById("btnCreate").addEventListener("click", onCreate)
    const ulRef = document.getElementById("phonebook")
    const personInputRef = document.getElementById("person")
    const phoneInputRef = document.getElementById("phone")
    async function onLoad() {
        const response = await fetch(URL)
        const data = await response.json()
        if (response.ok !== true) {
            return
        }

        ulRef.replaceChildren()
        Object.values(data).forEach(el => {
            const liCreate = document.createElement("li")
            liCreate.dataset.id = el._id
            liCreate.textContent = `${el.person}: ${el.phone}`
            const btnCreate = document.createElement("button")
            btnCreate.textContent = "Delete";
            btnCreate.addEventListener("click", onDelete)
            liCreate.appendChild(btnCreate)
            ulRef.appendChild(liCreate)
        })

    }
    async function onDelete(event) {
        let id = event.target.parentElement.dataset.id
        const options = {
            method: "DELETE"
        }
        await fetch(URL + `/${id}`, options)
        onLoad()
    }
    async function onCreate() {
        const person = personInputRef.value;
        const phone = phoneInputRef.value;
        personInputRef.value = ""
        phoneInputRef.value = ""
        if (!person || !phone) {
            return;
        }
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ person, phone })
        }
        await fetch(URL, options)
        onLoad()
    }

}

attachEvents();