function argumentInfo(...input) {

    let result = typeCheck(input)
    for (const element of input) {
        console.log(`${typeof element}: ${element}`);

    }

    for (const el of result) {
        console.log(`${el[0]} = ${el[1].length} `);

    }

    function typeCheck(input) {
        let result = {};
        for (const element of input) {
            if (!result.hasOwnProperty(typeof element)) {

                result[typeof element] = []
            }

            result[typeof element].push(element)


        }





        return sorting(result)

        function sorting(obj) {
            let result = []
            let sorting = Object.entries(obj);


            sorting = sorting.sort((a, b) => b[1].length - a[1].length)
            for (const el of sorting) {
                result.push(el)
            }
            return result
        }
    }

}
argumentInfo({ name: 'bob' }, 3.333, 9.999, [123, 123], { anme: "123" })