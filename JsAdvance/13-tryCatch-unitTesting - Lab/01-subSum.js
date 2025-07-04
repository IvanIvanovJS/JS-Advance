function subSum(arr, start, end) {
    if (Array.isArray(arr) === false) {

        return NaN;
    }
    if (start < 0) {
        start = 0
    }
    if (end > arr.length) {
        end = arr.length - 1
    }

    return arr.slice(start, end + 1).reduce((acc, cur) => acc + Number(cur), 0)
}
console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subSum([10, 'twenty', 30, 40], 0, 2));
console.log(subSum([], 1, 2));
console.log(subSum('text', 0, 2));
