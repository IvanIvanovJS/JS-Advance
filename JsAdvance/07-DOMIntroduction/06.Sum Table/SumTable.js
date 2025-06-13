function sumTable() {
    let table = document.querySelectorAll("tr")
    let data = Array.from(table);
    let pattern = /\d+\.?\d+/g;
    let result = 0;
    for (const element of data) {
        let text = element.textContent;
        let match = text.match(pattern);
        result += +match;
    }
    let sum = document.getElementById("sum");
    sum.textContent = result;
}