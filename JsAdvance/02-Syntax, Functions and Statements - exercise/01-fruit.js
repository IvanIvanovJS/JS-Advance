function fruit(fruitName, grams, price) {
    let sum = grams * price / 1000;
    console.log(`I need $${sum.toFixed(2)} to buy ${(grams / 1000).toFixed(2)} kilograms ${fruitName}.`);


}
fruit('orange', 2500, 1.80)