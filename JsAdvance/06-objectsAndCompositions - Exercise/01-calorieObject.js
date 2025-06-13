function calorieObject(arr) {
    let result = {}
    for (let i = 0; i < arr.length; i += 2) {
        let name = arr[i];
        let calories = Number(arr[i + 1]);
        result[name] = calories;
    }
    console.log(result);

}
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])