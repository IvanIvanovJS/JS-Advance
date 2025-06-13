function createSortedList(num) {
    let arr = [];

    return {
        add(num) {
            arr.push(num);
            arr.sort((a, b) => a - b);

        },
        remove(index) {
            if (index >= 0 && index < arr.length) {
                arr.splice(index, 1);
            } else {
                throw new Error(`Out of boundaries`);

            }

        },
        get(index) {
            if (index < arr.length) {
                return arr[index];
            } else {
                throw new Error(`Out of boundaries`);
            }

        },
        get size() {
            return arr.length;
        }


    }

}
let list = createSortedList();
let list2 = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size)
console.log(list2.size);



