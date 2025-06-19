function solve(arr, key) {
    return sorting(arr, key);

    function sorting(arr, key) {
        if (key === "asc") {
            return arr.sort((a, b) => a - b)
        } else {
            return arr.sort((a, b) => b - a)
        }
    }
}
console.log(typeof solve());

