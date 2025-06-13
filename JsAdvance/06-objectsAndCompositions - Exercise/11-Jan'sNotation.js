// @ts-nocheck
function jansNotation(data) {
    let operands = [];

    for (const element of data) {
        if (typeof element === `number`) {
            operands.push(element)
        } else {
            if (operands.length >= 2) {
                let lastNum = operands.pop();

                let secondLastNum = operands.pop();

                let currentNum = 0;
                switch (element) {
                    case '+': currentNum = secondLastNum + lastNum; break;
                    case '-': currentNum = secondLastNum - lastNum; break;
                    case '*': currentNum = secondLastNum * lastNum; break;
                    case '/': currentNum = secondLastNum / lastNum; break;
                }
                operands.push(currentNum)
            } else if (operands.length < 2) {
                return console.log(`Error: not enough operands!`);


            }

        }
    }

    operands.length === 1 ? console.log(operands[0]) : console.log(`Error: too many operands!`);



}
jansNotation([15,
    '/']
)

