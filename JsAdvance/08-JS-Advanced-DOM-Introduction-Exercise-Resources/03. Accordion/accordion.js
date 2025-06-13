function toggle() {
    let button = document.getElementsByClassName("button");

    let text = document.getElementById("extra");
    text.style.display === "none"
    if (text.style.display === "none") {
        text.style.display = "block";
        button[0].textContent = "Less"
    } else {
        text.style.display = "none";
        button[0].textContent = "More"
    }
}