function validate() {
    let input = document.getElementById("email")
    let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
    input.addEventListener("change", () => {
        if (!input.value.match(pattern)) {
            input.classList.add('error');
        } else {
            input.classList.remove("error")
        }
    })

}