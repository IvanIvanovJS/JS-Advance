async function solution() {
    const tableBodyRef = document.getElementsByTagName("tbody")[0]
    const URL = "http://localhost:3030/jsonstore/collections/students"
    const response = await fetch(URL)
    const data = await response.json()
    const records = Object.values(data);
    const formRef = document.getElementById("form")
    formRef.addEventListener("submit", onSumbmit)

    showRecords(records)
    function showRecords(records) {
        tableBodyRef.replaceChildren()
        records.forEach(record => {
            const trCreate = document.createElement("tr")
            trCreate.innerHTML = `
                    <th>${record.firstName}</th>
                    <th>${record.lastName}</th>
                    <th>${record.facultyNumber}</th>
                    <th>${record.grade}</th>
                `
            tableBodyRef.appendChild(trCreate)
        })
    }

    async function onSumbmit(event) {
        event.preventDefault();
        const formData = new FormData(formRef)
        const firstName = formData.get("firstName")
        const lastName = formData.get("lastName")
        const facultyNumber = formData.get("facultyNumber")
        const grade = formData.get("grade")
        if (!firstName || !lastName || !facultyNumber || !grade) {
            return
        }
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ firstName, lastName, facultyNumber, grade })
        }
        console.log("test1");
        await fetch(URL, options)



        solution()

    }
}
solution()