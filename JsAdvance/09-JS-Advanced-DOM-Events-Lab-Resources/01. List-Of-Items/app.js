function addItem() {
    const ul = document.getElementById("items");
    const input = document.getElementById("newItemText");
    const text = input.value.trim();

    if (text !== "") {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // Добавяме слушател за задраскване
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                li.style.textDecoration = "line-through";
                li.style.opacity = "0.6"; // по избор – леко избледняване
            } else {
                li.style.textDecoration = "none";
                li.style.opacity = "1";
            }
        });

        li.appendChild(checkbox);
        li.append(" " + text);
        ul.appendChild(li);

        input.value = "";
    }
}

function clearAll() {
    document.getElementById("items").innerHTML = "";
}
