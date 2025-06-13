function sameNumbers(number) {
    let numAsStr = String(number);
    let firstChar = numAsStr[0];
    let isSame = true;
    let sum = 0;
    for (let char of numAsStr) {
        if (firstChar !== char) {
            isSame = false;
        }
        sum += +char;

    }
    console.log(isSame);
    console.log(sum);


}
sameNumbers(2222252)