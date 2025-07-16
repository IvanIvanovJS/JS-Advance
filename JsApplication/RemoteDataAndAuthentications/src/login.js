document.querySelector("form").addEventListener("submit", loginOn);

function loginOn(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log(formData.get("email"));

}