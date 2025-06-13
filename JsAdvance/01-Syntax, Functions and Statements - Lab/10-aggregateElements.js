function aggregateElements(arr) {
    let sum = 0;
    let inverseSum = 0;
    let concatSum = ``;
    for (let element of arr) {
        sum += element;
        inverseSum += 1 / element;
        concatSum += String(element);

    }
    console.log(sum);
    console.log(inverseSum);
    console.log(concatSum);

}
aggregateElements([2, 4, 8, 16])