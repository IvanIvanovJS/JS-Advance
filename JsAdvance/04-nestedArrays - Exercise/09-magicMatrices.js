function magicMatrices(arr) {
    let resultRow = [];

    let isMagic = true;
    for (const row of arr) {
        resultRow.push(row.reduce((acc, num) => acc + num, 0));

    }
    let rowChecked = resultRow.reduce((acc, num) => acc + num, 0);
    if (rowChecked / resultRow.length !== resultRow[0]) {
        isMagic = false
    }


    for (let i = 0; i < arr.length - 1; i++) {
        let colSumOne = 0;
        let colSumTwo = 0;
        arr.forEach(row => colSumOne += row[i]);
        arr.forEach(row => colSumTwo += row[i + 1]);
        if (colSumOne !== colSumTwo) {
            isMagic = false;
        }
    }


    return isMagic;
}
magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]


)