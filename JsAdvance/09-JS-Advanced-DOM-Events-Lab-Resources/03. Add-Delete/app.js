function addItem() {
    let items = document.getElementById("items")

    let input = document.getElementById("newItemText")
    let text = input.value
    let createLi = document.createElement("li")
    createLi.textContent = text;
    let deleteBtn = document.createElement("a");
    deleteBtn.textContent = "[Delete]"
    deleteBtn.href = "#"
    createLi.appendChild(deleteBtn)
    deleteBtn.addEventListener("click", () => {
        createLi.remove()
    })
    items.appendChild(createLi)
    input.value = ""


}