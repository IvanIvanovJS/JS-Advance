function getFibonator() {
    let prevoiusNum = 0;
    let currentNum = 1;
    let result = 0;
    return function sequenceGen() {

        result = prevoiusNum + currentNum
        currentNum = prevoiusNum
        prevoiusNum = result


        return result
    }

}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13


