function attachGradientEvents() {
    let box = document.getElementById("gradient")
    let boxWidth = box.offsetWidth;
    let resultRef = document.getElementById("result")

    box.addEventListener("mousemove", (event) => {


        let positionOfMouse = event.offsetX / (event.target.clientWidth - 1);
        let percentage = Math.floor(positionOfMouse * 100)

        resultRef.textContent = percentage + "%"

    })

}