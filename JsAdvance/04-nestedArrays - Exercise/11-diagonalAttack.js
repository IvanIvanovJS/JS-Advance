function diagonalAttack(data) {
    let matrix = [];
    for (const element of data) {
        matrix.push(element.split(` `))
    }
    let mainDiagonal = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row === col) {
                matrix[row][col] = Number(matrix[row][col]);
                mainDiagonal += matrix[row][col];
            }
        }
    }

    let secondDiagonal = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if ((matrix[row].length - row) === (col + 1)) {

                matrix[row][col] = Number(matrix[row][col]);
                secondDiagonal += matrix[row][col];
            }
        }
    }




    if (secondDiagonal === mainDiagonal) {

        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (typeof matrix[row][col] !== `number`) {
                    matrix[row][col] = mainDiagonal;
                }
            }
        }

    }
    for (let element of matrix) {
        console.log(element.join(` `));

    }




}
diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']

)