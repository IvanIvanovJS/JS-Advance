function calculator() {
    let selector1 = "test"
    let selector2 = "test1"
    let resultSelector = "result"
    return {

        init: [
            selector1,
            selector2,
            resultSelector
        ].toString()

    }


}

let test = calculator()
console.log(test.init);
