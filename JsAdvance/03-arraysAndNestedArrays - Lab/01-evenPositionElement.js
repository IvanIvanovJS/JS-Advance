function evenPositionElement(arr) {
    function isEvenIndex(num) {
        if (arr.indexOf(num) % 2 === 0) {
            return num;
        }
    }
    console.log(arr.filter(isEvenIndex));

}
evenPositionElement(['20', '30', '40', '50', '60'])