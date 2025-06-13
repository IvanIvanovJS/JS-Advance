function deleteByEmail() {
    let rowsRef = document.querySelectorAll("tbody tr")
    let input = document.getElementsByName("email")
    let result = document.getElementById("result")
    let match = input[0].value;
    for (let row of rowsRef) {
        let emailText = row.children[1].textContent

        if (emailText === match) {
            row.remove();
            result.textContent = "Deleted."
        } else {
            result.textContent = "Not found."
        }
    }
    input[0].value = ""
}