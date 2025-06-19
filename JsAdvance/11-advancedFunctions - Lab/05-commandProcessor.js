function solution() {
    let result = ""

    return {
        append(str) {
            return result += str;
        },

        removeStart(int) {
            return result = result.slice(int)
        },
        removeEnd(int) {
            return result = result.slice(0, -int)
        },
        print() {
            return console.log(result)
        }
    }
}
let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
