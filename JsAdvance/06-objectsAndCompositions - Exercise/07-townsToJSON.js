// @ts-nocheck
function townsToJSON(data) {
    let pattern = /[ | ]{2,}/g
    data.shift();
    let result = [];
    for (const element of data) {
        let info = element.split(pattern).filter(x => x !== "");
        let [town, lati, longi] = info;
        lati = Number(lati).toFixed(2);

        longi = Number(longi).toFixed(2);

        result.push({
            Town: town,
            Latitude: Number(lati),
            Longitude: Number(longi)
        })

    }
    console.log(JSON.stringify(result));


}
townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'])
