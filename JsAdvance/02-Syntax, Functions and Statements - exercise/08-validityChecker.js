function validityChecker(x1, y1, x2, y2) {
    let x1y1 = isValidDistance(x1, y1)
    let x2y2 = isValidDistance(x2, y2)
    let x1y1x2y2 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    let isValid = Number.isInteger(x1y1x2y2)

    function isValidDistance(x, y) {
        let distance = Math.sqrt(x ** 2 + y ** 2);
        return Number.isInteger(distance)
    }
    console.log(`{${x1}, ${y1}} to {0, 0} is ${x1y1 ? `valid` : `invalid`} `);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${x2y2 ? `valid` : `invalid`} `);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid ? `valid` : `invalid`}`);


}
validityChecker(2, 1, 1, 1)