function solve() {
    document.querySelector("form").addEventListener("submit", onSubmit)
    let taskRef = document.getElementById("task")
    let descriptionRef = document.getElementById("description")
    let dateRef = document.getElementById("date")
    let sectionsRef = document.querySelectorAll("section")
    let openDivRef = sectionsRef[1].children[1];
    let inProgressRef = sectionsRef[2].children[1];
    let completeRef = sectionsRef[3].children[1];
    function onSubmit(event) {
        event.preventDefault();

    }
    let buttonRef = document.getElementById("add");
    buttonRef.addEventListener("click", () => {
        if (taskRef.value !== "" && descriptionRef.value !== "" && dateRef.value !== "") {
            let article = createArticle(taskRef.value, descriptionRef.value, dateRef.value)
            openDivRef.appendChild(article)
        }
    })

    function createArticle(task, description, date) {
        let createArt = document.createElement("article")
        let createH3 = document.createElement("h3")
        createH3.textContent = task;
        let createDiscription = document.createElement("p")
        createDiscription.textContent = "Description: " + description;
        let createData = document.createElement("p")
        createData.textContent = "Due Date: " + date;
        let createDiv = document.createElement("div")
        createDiv.className = "flex"
        let startButton = createButton("Start", "green");

        startButton.addEventListener("click", () => {
            let articleRef = startButton.parentElement.parentElement
            inProgressRef.appendChild(articleRef)
            startButton.textContent = "Delete";
            startButton.className = "red"
            deleteButton.textContent = "Finish"
            deleteButton.className = "orange"
            startButton.addEventListener("click", () => {
                startButton.parentElement.parentElement.remove()
            })
            deleteButton.addEventListener("click", () => {
                completeRef.appendChild(articleRef)
                deleteButton.parentElement.remove()
            })

        })
        let deleteButton = createButton("Delete", "red")
        deleteButton.addEventListener("click", () => {
            let articleRef = startButton.parentElement.parentElement
            articleRef.remove()
        })
        createDiv.appendChild(startButton)
        createDiv.appendChild(deleteButton)
        createArt.appendChild(createH3)
        createArt.appendChild(createDiscription)
        createArt.appendChild(createData)
        createArt.appendChild(createDiv)
        return createArt




    }
    function createButton(name, className) {
        let createBtn = document.createElement("button");
        createBtn.textContent = name;
        createBtn.className = className

        return createBtn
    }
}