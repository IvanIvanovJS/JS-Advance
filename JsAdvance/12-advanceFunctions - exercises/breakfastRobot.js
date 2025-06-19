function solution() {

    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };
    let menu = {
        apple: {//•	apple - made with 1 carbohydrate and 2 flavour
            carbohydrate: 1,
            flavour: 2
        },//•	lemonade - made with 10 carbohydrate and 20 flavour
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },//•	burger - made with 5 carbohydrate, 7 fat and 3 flavour
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },//•	eggs - made with 5 protein, 1 fat and 1 flavour
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },//•	turkey - made with 10 protein, 10 carbohydrate, 10 fat and 10 flavour
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }

    return function (input) {
        let [command, name, qty] = input.split(` `);
        qty = Number(qty);
        if (command === "restock") {

            stock[name] += qty
            return "Success";
        } else if (command === "prepare") {
            let ingridients = menu[name];
            let canCook = true;
            for (const micro in ingridients) {
                if (ingridients[micro] * qty > stock[micro]) {
                    canCook = false;
                    return `Error: not enough ${micro} in stock`
                }
            }
            if (canCook) {
                for (const micro in ingridients) {
                    stock[micro] -= ingridients[micro] * qty;

                }
                return "Success";
            }


            stock[name] -= qty;
            return "Success";
        } else {
            return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`
        }



    }

}
let manager = solution();
/*['prepare turkey 1', 'Error: not enough protein in stock'],
    ['restock protein 10', 'Success'],
    ['prepare turkey 1', 'Error: not enough carbohydrate in stock'],
    ['restock carbohydrate 10', 'Success'],
    ['prepare turkey 1', 'Error: not enough fat in stock'],
    ['restock fat 10', 'Success'],
    ['prepare turkey 1', 'Error: not enough flavour in stock'],
    ['restock flavour 10', 'Success'],
    ['prepare turkey 1', 'Success'],
    ['report', 'protein=0 carbohydrate=0 fat=0 flavour=0']*/

console.log(manager('prepare turkey 1'));      // Success
console.log(manager('restock protein 10'));         // Success
console.log(manager('prepare turkey 1'));         // Success
console.log(manager('restock carbohydrate 10'));         // Success
console.log(manager('prepare turkey 1'));         // Success
console.log(manager('restock fat 10'));         // Success
console.log(manager('prepare turkey 1'));         // Success
console.log(manager('restock flavour 10'));         // Success
console.log(manager('prepare turkey 1'));         // Success
console.log(manager("report"));  
