// @ts-nocheck

function orbitMatrix(data) {
    let [rowLength, colLength, x, y] = data;
    let matrix = [[]];

    for (let row = 0; row < rowLength; row++) {

        matrix[row] = []
        for (let col = 0; col < colLength; col++) {
            // @ts-ignore
            matrix[row][col] = 0;
        }
    }
    matrix[x][y] = 1;



    for (let row = 0; row < rowLength; row++) {
        for (let col = 0; col < colLength; col++) {

            let distanceX = Math.abs(row - x);
            let distanceY = Math.abs(col - y);
            matrix[row][col] = Math.max(distanceX, distanceY) + 1;
        }
    }

    matrix.forEach(el => console.log(el.join(` `)));




}
orbitMatrix([4, 4, 0, 0]

)