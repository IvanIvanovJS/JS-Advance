function listOfNames(arr) {
    arr.sort((a, b) => a.localeCompare(b))
    arr.forEach(element => {
        console.log(`${arr.indexOf(element) + 1}.${element}`);

    });

}
listOfNames(["John", "Bob", "Christina", "Ema"])