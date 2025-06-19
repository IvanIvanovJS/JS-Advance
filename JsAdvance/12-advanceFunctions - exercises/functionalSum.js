function add(num) {
    let result = num;

    function sum(num2) {
        result += num2
        return sum;
    }
    sum.toString = () => result;
    return sum
}
console.log(add(1)(5)(5)(10).toString());
