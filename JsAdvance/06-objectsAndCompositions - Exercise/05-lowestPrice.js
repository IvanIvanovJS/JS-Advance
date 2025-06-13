function lowestPrice(data) {
    let result = {};
    let towns = {};
    for (const element of data) {
        let [town, product, price] = element.split(` | `)
        price = Number(price);
        if (!result.hasOwnProperty(product)) {

            result[product] = price;
            towns[product] = town;

        } else {
            if (result[product] > price) {
                result[product] = price;
                towns[product] = town;
            }
        }
    }
    let entriesOfResult = Object.entries(result);
    for (let [product, price] of entriesOfResult) {
        if (towns.hasOwnProperty(product)) {
            console.log(`${product} -> ${price} (${towns[product]})`);

        }


    }



}
lowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)