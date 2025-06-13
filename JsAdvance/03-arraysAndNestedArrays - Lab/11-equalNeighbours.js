function equalNeightbors(arr) {
    let counter = 0;
    let previousRow = [];

    for (let row of arr) {

        if (previousRow.length > 0) {
            for (let i = 0; i < row.length; i++) {
                let element = row[i];
                let previousRowElement = previousRow[i];
                if (element === previousRowElement) {
                    counter++;
                }
            }

        }
        let previousElement;
        for (let element of row) {
            if (previousElement === element) {
                counter++;
            }
            previousElement = element;
        }
        previousRow = row;

    }
    return counter;
}
console.log(equalNeightbors([[2, 2, 5, 7, 4],
[4, 0, 5, 3, 4],
[2, 5, 5, 4, 2]]

));
