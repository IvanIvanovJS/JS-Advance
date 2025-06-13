function storeCatalogue(data) {
    let result = {}
    data = data.sort((a, b) => a.localeCompare(b));


    for (let element of data) {
        let [product, price] = element.split(` : `)
        result[product] = Number(price);
    }
    let currentLetter = "";
    for (let [key, value] of Object.entries(result)) {
        if (currentLetter !== key[0]) {
            currentLetter = key[0];
            console.log(currentLetter);

        }
        console.log(`  ${key}: ${value}`);

    }


}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)