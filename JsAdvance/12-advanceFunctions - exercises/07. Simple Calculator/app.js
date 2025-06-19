function calculator() {
    let selector1 = document.getElementById("num1");
    let selector2 = document.getElementById("num2");
    let resultSelector = document.getElementById("result");
    return {

        init() { selector1.value = "", selector2.value = "", resultSelector.value = "" },
        add() {

            return resultSelector.value = Number(selector1.value) + Number(selector2.value);

        },
        subtract() {
            return resultSelector.value = Number(selector1.value) - Number(selector2.value);
        }

    }


}

let test = calculator()
console.log(test.init);





