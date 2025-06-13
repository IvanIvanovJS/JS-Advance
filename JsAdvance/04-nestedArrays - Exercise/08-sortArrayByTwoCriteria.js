function sortArray(arr) {
    arr.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        return a.localeCompare(b)
    })

    arr.forEach(element => {
        console.log(element);

    });
}
sortArray(['test',
    'Deny',
    'omen',
    'Default']

)