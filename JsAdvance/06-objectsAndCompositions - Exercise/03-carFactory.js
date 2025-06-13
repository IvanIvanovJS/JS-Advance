function carFactory(data) {
    let newCar = { model: data.model };
    let engines = [{ power: 90, volume: 1800 },
    { power: 120, volume: 2400 },
    { power: 200, volume: 3500 }]

    for (const engine of engines) {
        if (engine.power >= data.power) {
            newCar.engine = {
                power: engine.power,
                volume: engine.volume

            }
            break;
        }

    }
    newCar.carriage = {
        type: data.carriage,
        color: data.color
    }
    let wheels = new Array(4);
    if (data.wheelsize % 2 === 0) {
        let wheelsize = data.wheelsize - 1;
        wheels.fill(wheelsize);

    } else {
        wheels.fill(data.wheelsize)

    }
    newCar.wheels = wheels;

    return newCar;
}
let result = carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}


)
console.log(result);
