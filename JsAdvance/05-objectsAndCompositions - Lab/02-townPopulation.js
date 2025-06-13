// @ts-nocheck
function townPopulation(data) {
    let result = {};
    for (let info of data) {
        let [town, population] = info.split(` <-> `);
        population = Number(population)
        if (result[town]) {
            result[town] += population;
        } else {
            result[town] = population;
        }

    }

    // @ts-ignore
    for ([key, value] of Object.entries(result)) {

        console.log(`${key} : ${value}`);

    }
}
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']

)