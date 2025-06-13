function lastKNumberSeq(n, k) {
    let result = [1];
    let currentElements = [1];
    for (let i = 1; i < n; i++) {
        let currNum = currentElements.reduce((acc, num) => acc + num, 0)
        if (currentElements.length >= k) {
            currentElements.shift();
            currentElements.push(currNum);
        } else {
            currentElements.push(currNum);
        }
        result.push(currNum)
    }
    return result;

}
console.log(lastKNumberSeq(8, 2));