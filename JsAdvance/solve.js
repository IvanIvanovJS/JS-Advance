let test = {
    name: "Ivan",
    age: 12
}
console.log(Object.entries(test).forEach(el => {
    console.log(el);
    console.log(test.length);

}));
