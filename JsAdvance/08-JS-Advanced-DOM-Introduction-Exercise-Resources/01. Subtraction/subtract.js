function subtract() {
    let numA = Number(document.getElementById("firstNumber").value);
    let numB = Number(document.getElementById("secondNumber").value);
    let sum = numA - numB;
    let result = document.getElementById("result");
    return result.textContent = sum
}