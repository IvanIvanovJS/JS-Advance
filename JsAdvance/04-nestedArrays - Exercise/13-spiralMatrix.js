// @ts-nocheck
function spiralMatrix(x, y) {
    let matrix = [[]];
    let counter = 1;
    for (let row = 0; row < x; row++) {

        matrix[row] = []
        for (let col = 0; col < y; col++) {
            // @ts-ignore
            matrix[row][col] = 0;
        }
    }
    for (let row = 0; row < x; row++) {

        for (let col = 0; col < y; col++) {
            while (!matrix[row].includes(0)) {

                row++;
                if (!matrix.flat().includes(0)) {
                    break;
                }
            }
            if (matrix[row][col] === 0) {
                matrix[row][col] = counter;
                counter++;
            }

            if (!matrix[row].includes(0)) {

                while (row < x) {

                    if (matrix[row][col] === 0) {
                        matrix[row][col] = counter;

                        counter++
                    }
                    row++;
                }
            }

            if (row === x) {
                row--;

                while (!matrix[row].includes(0)) {
                    row--;
                    if (!matrix.flat().includes(0)) {
                        break;
                    }
                }
                for (let col = y - 1; col >= 0; col--) {
                    if (matrix[row][col] === 0) {
                        matrix[row][col] = counter;
                        counter++
                    }

                }

                for (row; row > 0; row--) {

                    if (matrix[row][col] !== 0) {
                        for (col = 0; col < y; col++) {
                            if (matrix[row][col] === 0) {
                                break;
                            }
                        }

                    }
                    if (matrix[row][col] === 0) {
                        matrix[row][col] = counter;
                        counter++
                    }

                }

            }

        }

        if (!matrix.flat().includes(0)) {
            return matrix.forEach(el => console.log(el.join(` `)));
        }
    }

    matrix.forEach(el => console.log(el.join(` `)));

}
spiralMatrix(15, 15)