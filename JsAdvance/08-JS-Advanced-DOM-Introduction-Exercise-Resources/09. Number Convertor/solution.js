
function solve() {

    let menuRef = document.getElementById("selectMenuTo")
    let createOption = document.createElement("option")
    menuRef.appendChild(createOption)
    let optionsRef = menuRef.querySelectorAll("option")
    let input = document.getElementById("input")
    optionsRef[0].value = "binary"
    optionsRef[0].text = "Binary"
    optionsRef[1].value = 'hexadecimal'
    optionsRef[1].text = "Hexadecimal"
    let button = document.querySelector("button")
    button.addEventListener("click", onClick);
    function onClick() {


        let resultRef = document.getElementById("result")
        let result = "";
        let deciaml = Number(input.value)
        if (deciaml === 0) {
            return resultRef.value = 0;
        }
        if (menuRef.value === "binary") {

            while (deciaml >= 1) {
                deciaml = Math.trunc(deciaml)
                result += deciaml % 2;
                deciaml /= 2;


            }

        } else if (menuRef.value === "hexadecimal") {
            while (deciaml >= 1) {
                deciaml = Math.trunc(deciaml)
                let modResult = deciaml % 16;
                let hexa = {
                    10: "A",
                    11: "B",
                    12: "C",
                    13: "D",
                    14: "E",
                    15: "F"
                }
                if (modResult > 9) {
                    result += hexa[modResult];
                } else {
                    result += modResult
                }
                deciaml /= 16;

            }
        }
        resultRef.value = result.split(``).reverse().join(``);
    }
}