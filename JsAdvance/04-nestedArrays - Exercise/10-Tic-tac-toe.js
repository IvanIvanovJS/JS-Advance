// @ts-nocheck
function ticTacToe(data) {
    let dashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]];
    let turn = true;
    let xWinRow;
    let oWinRow;
    for (let i = 0; i < data.length; i++) {
        let [row, col] = data[i].split(` `).map(Number);


        if (dashboard[row][col] !== false) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }
        if (turn) {
            dashboard[row][col] = `X`;
            turn = false;

        } else {
            dashboard[row][col] = `O`;
            turn = true;
        }
        if (!dashboard.flat().includes(false)) {
            console.log("The game ended! Nobody wins :(");
            for (const element of dashboard) {
                console.log(element.join(`\t`));

            }
            return;
        }

        for (let row = 0; row < dashboard.length; row++) {
            xWinRow = dashboard[row].filter(x => x === `X`); // if row.length === 3
            oWinRow = dashboard[row].filter(x => x === `O`);
            if (xWinRow.length === 3) {
                break;
            }
            if (oWinRow.length === 3) {
                break;
            }

        }

        let xDiagonalWin; // if true;
        let oDiagonalWin;
        let xColWin;
        let oColWin;
        if (dashboard[0][0] === `X` && dashboard[1][0] === `X` && dashboard[2][0] === `X`
            || dashboard[0][1] === `X` && dashboard[1][1] === `X` && dashboard[2][1] === `X`
            || dashboard[0][2] === `X` && dashboard[1][2] === `X` && dashboard[2][2] === `X`) {
            xColWin = true;
        }
        if (dashboard[0][0] === `O` && dashboard[1][0] === `O` && dashboard[2][0] === `O`
            || dashboard[0][1] === `O` && dashboard[1][1] === `O` && dashboard[2][1] === `O`
            || dashboard[0][2] === `O` && dashboard[1][2] === `O` && dashboard[2][2] === `O`) {
            oColWin = true;
        }
        if (dashboard[0][0] === `X` && dashboard[1][1] === `X` && dashboard[2][2] === `X`
            || dashboard[2][0] === `X` && dashboard[1][1] === `X` && dashboard[0][2] === `X`) {
            xDiagonalWin = true;
        }
        if (dashboard[0][0] === `O` && dashboard[1][1] === `O` && dashboard[2][2] === `O`
            || dashboard[2][0] === `O` && dashboard[1][1] === `O` && dashboard[0][2] === `O`) {
            oDiagonalWin = true;
        }
        if (xWinRow.length === 3 || xDiagonalWin || xColWin) {
            console.log(`Player X wins!`);
            for (const element of dashboard) {
                console.log(element.join(`\t`));

            }

            return;

        }
        if (oWinRow.length === 3 || oDiagonalWin || oColWin) {
            console.log(`Player O wins!`);
            for (const element of dashboard) {
                console.log(element.join(`\t`));

            }
            return;

        }
    }



}
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]

)