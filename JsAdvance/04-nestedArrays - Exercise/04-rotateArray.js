function rotateArray(arr, step) {
    for (let i = 1; i <= step; i++) {
        let pop = arr.pop();
        arr.unshift(pop);
    }

    console.log(arr.join(` `));

}
rotateArray(['1',
    '2',
    '3',
    '4'],
    2
);