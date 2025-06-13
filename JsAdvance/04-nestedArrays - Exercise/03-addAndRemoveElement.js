function addAndRemoveElement(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!arr.includes(`add`)) {
            console.log(`Empty`);
            return;
        }
        let command = arr[i];
        if (command === `add`) {
            result.push(i + 1)

        } else if (command === `remove`) {
            result.pop();
        }

    }
    if (result.length > 0) {
        for (const element of result) {
            console.log(element);

        }
    } else {
        console.log(`Empty`);
    }

}
addAndRemoveElement(['remove',
    'remove',
    'remove']

)