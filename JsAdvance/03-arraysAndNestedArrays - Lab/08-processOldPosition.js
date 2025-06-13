function processOddPosition(arr) {
    return arr.filter((num, i) => i % 2 != 0).map((num) => num * 2).reverse().join(` `);

}
console.log(processOddPosition([3, 0, 10, 4, 7, 3]));
