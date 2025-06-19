function solution(num) {


    return function add(num2) {
        result = num + num2
        return num + num2
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
