function focused() {
    let input = Array.from(document.querySelectorAll("input"));
    input.forEach((e) => {
        e.addEventListener("focus", () => {

            e.parentElement.className = "focused"
        })
        e.addEventListener("blur", () => {
            input.forEach((el) => el.parentElement.className = "");
        })
    })
}