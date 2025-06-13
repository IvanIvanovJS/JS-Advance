function heroicInventory(data) {
    let result = [];
    for (let element of data) {

        if (!element.trim()) continue;
        let [name, level, items] = element.split(` / `);


        level = Number(level)
        items = items ? items.split(`, `) : [];



        result.push({ name, level, "items": items })

    }


    return JSON.stringify(result);




}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)