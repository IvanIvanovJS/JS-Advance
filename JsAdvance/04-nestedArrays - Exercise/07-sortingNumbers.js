function sortingNumbers(arr) {
    let result = [];
    arr.sort((a, b) => a - b)
    while (arr.length > 0) {
        let push = arr.shift();
        let push2 = arr.pop();
        result.push(push);
        result.push(push2);
    }
    return result;

}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])