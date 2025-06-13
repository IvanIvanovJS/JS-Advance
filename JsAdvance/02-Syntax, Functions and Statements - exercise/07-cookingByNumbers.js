function cookingByNumbers(inputNum, op1, op2, op3, op4, op5) {
    let num = Number(inputNum);
    let arr = [op1, op2, op3, op4, op5];
    for (let operation of arr) {
        switch (operation) {
            case `chop`: num /= 2;
                console.log(num);
                break;
            case `dice`: num = Math.sqrt(num);
                console.log(num);
                break;
            case `spice`: num++;
                console.log(num);
                break;
            case `bake`: num *= 3;
                console.log(num);
                break;
            case `fillet`: num *= 0.8;
                console.log(num)
                break;
        }
    }
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')