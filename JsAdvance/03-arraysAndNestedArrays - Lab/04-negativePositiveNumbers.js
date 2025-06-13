function negativePositiveNumbers(arr) {
    let result = [];
    for (const element of arr) {
        if (element < 0) {
            result.unshift(element);
        } else {
            result.push(element)
        }
    }
    for (const element of result) {
        console.log(element);

    }
}
negativePositiveNumbers([7, -2, 8, 9])