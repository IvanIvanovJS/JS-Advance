function arrayManipol(arr) {

    let result = [arr[0]];
    for (const element of arr) {
        if (element >= result[result.length - 1] && arr.indexOf(element) !== 0) {
            result.push(element)
        }
    }
    return result;


}
arrayManipol([1,
    3,
    8, 8,
    4,
    10,
    12,
    3,
    2,
    24]
)