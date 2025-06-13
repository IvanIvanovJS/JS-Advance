function diagonalSums(arr) {
    let firstDiagonalSUm = 0;
    let secondDiagonalSum = 0;
    for (let row = 0; row < arr.length; row++) {

        for (let i = 0; i < arr[row].length; i++) {
            if (row === i) {
                firstDiagonalSUm += arr[row][i];
            }

        }

    }
    arr.reverse();
    for (let row = 0; row < arr.length; row++) {


        for (let i = 0; i < arr[row].length; i++) {
            if (row === i) {
                secondDiagonalSum += arr[row][i];
            }

        }

    }

    console.log(firstDiagonalSUm, secondDiagonalSum);



}
(diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]

));
