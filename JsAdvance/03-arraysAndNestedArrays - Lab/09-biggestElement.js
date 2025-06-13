function biggestElement(arr) {
    let flatarr = arr.flat();
    return Math.max(...flatarr);
}
console.log(biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]
));
