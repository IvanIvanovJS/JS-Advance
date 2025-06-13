// @ts-ignore
function gcd(num1, num2) {
    let greatestDivisor = 0;
    let lowestNumber = Math.min(num1, num2)
    for (let i = 1; i <= lowestNumber; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            greatestDivisor = i;
        }
    }
    console.log(greatestDivisor);

}
gcd(2154, 458)