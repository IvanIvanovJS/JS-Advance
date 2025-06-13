function pieceOfPie(arr, start, end) {
    let startIndex = arr.indexOf(start);
    let endIndex = arr.indexOf(end) + 1;
    return arr.slice(startIndex, endIndex)
}
console.log(pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));
