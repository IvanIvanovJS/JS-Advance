function app() {
    const userNameRef = document.querySelector("span")
    const userData = JSON.parse(sessionStorage.getItem("userData"))
    const userRef = document.getElementById("user")
    const guestRef = document.getElementById("guest")
    const catchesTable = document.getElementById("catches")
    document.querySelector(".load").addEventListener("click", onLoad);
    const addForm = document.querySelector("#addForm")
    const catchesURL = "http://localhost:3030/data/catches";
    addForm.addEventListener("submit", addSumbit)
    if (sessionStorage.userData) {
        userNameRef.textContent = userData.email
        userRef.style.display = "inline-block"
        guestRef.style.display = "none"
        addForm.querySelector("button").disabled = false

    } else {
        userNameRef.textContent = "guest"
        guestRef.style.display = "inline-block"
        userRef.style.display = "none"
        addForm.querySelector("button").disabled = true
    }
    const logoutBtn = document.getElementById("logout")

    logoutBtn.addEventListener("click", onLogout)
    async function onLogout() {
        const logoutURL = "http://localhost:3030/users/logout"
        const options = {
            method: "GET",
            headers: { "X-Authorization": userData.accessToken }
        }
        await fetch(logoutURL, options)
        sessionStorage.clear()
        window.location = "index.html"
    }
    async function onLoad() {

        const response = await fetch(catchesURL)
        const data = await response.json()
        catchesTable.replaceChildren()
        for (const record of data) {
            const divCreate = document.createElement("div")
            divCreate.classList.add("catch")
            divCreate.dataset.id = record._id
            catchesTable.appendChild(divCreate)
            divCreate.innerHTML = `<label>Angler</label>
                        <input type="text" class="angler" value=${record.angler}>
                        <label>Weight</label>
                        <input type="text" class="weight" value=${record.weight}>
                        <label>Species</label>
                        <input type="text" class="species" value=${record.species}>
                        <label>Location</label>
                        <input type="text" class="location" value=${record.location}>
                        <label>Bait</label>
                        <input type="text" class="bait" value=${record.bait}>
                        <label>Capture Time</label>
                        <input type="number" class="captureTime" value=${record.captureTime}>
                        <button class="update" data-id=${record._ownerId}>Update</button>
                        <button class="delete" data-id=${record._ownerId}>Delete</button>`

        }
        const updateBtns = Array.from(document.querySelectorAll("button.update"))
        const deleteBtns = Array.from(document.querySelectorAll("button.delete"))
        if (userData) {
            deleteBtns.forEach(btn => {
                if (btn.dataset.id !== userData.id) {
                    btn.disabled = true;
                } else {
                    btn.disabled = false;
                    btn.addEventListener("click", onDelete)
                }
            })
            updateBtns.forEach(btn => {
                if (btn.dataset.id !== userData.id) {
                    btn.disabled = true;
                } else {
                    btn.disabled = false;
                    btn.addEventListener("click", onUpdate)
                }
            })
        } else {
            updateBtns.forEach(btn => {
                btn.disabled = true;
            })
            deleteBtns.forEach(btn => {
                btn.disabled = true;
            })
        }
        async function onDelete(event) {
            const id = event.target.parentElement.dataset.id;

            const options = {
                method: "DELETE",
                headers: { "X-Authorization": userData.accessToken }
            }
            await fetch(catchesURL + `/${id}`, options)
            onLoad()

        }
        async function onUpdate(event) {
            const div = event.target.parentElement
            const id = div.dataset.id;
            const angler = div.querySelector(".angler").value
            const weight = div.querySelector(".weight").value
            const species = div.querySelector(".species").value
            const location = div.querySelector(".location").value
            const bait = div.querySelector(".bait").value
            const captureTime = div.querySelector(".captureTime").value
            const options = {
                method: "PUT",
                headers: { "Content-Type": "application/json", "X-Authorization": userData.accessToken },
                body: JSON.stringify({ angler, weight, species, location, bait, captureTime })
            }
            await fetch(catchesURL + `/${id}`, options)
            onLoad()
        }

    }
    async function addSumbit(event) {
        event.preventDefault();
        const formData = new FormData(event.target)
        const angler = formData.get("angler")
        const weight = formData.get("weight")
        const species = formData.get("species")
        const location = formData.get("location")
        const bait = formData.get("bait")
        const captureTime = formData.get("captureTime")
        if (!angler || !weight || !species || !location || !bait || !captureTime) {
            return
        }
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json", "X-Authorization": userData.accessToken },
            body: JSON.stringify({ angler, weight, species, location, bait, captureTime })
        }
        await fetch(catchesURL, options)
        onLoad()
    }
}
app()