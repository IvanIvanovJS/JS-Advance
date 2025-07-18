function abv() {

    const test = {
        one: this.one,
        two: 2,
        tree: 3
    }
    test.one = "tree"
    console.log(test.one);


}

abv()