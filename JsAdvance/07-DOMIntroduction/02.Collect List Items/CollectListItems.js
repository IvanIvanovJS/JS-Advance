// @ts-nocheck
function extractText() {
    let items = document.querySelectorAll("li")
    let arr = Array.from(items)
    let result = ""
    let textArea = document.getElementById("result")
    for (const element of arr) {
        result += element.textContent + "\n"
    }
    textArea.value = result;
}