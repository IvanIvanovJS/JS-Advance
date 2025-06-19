function solution(arr) {

    function createProcessor() {
        let result = [];
        return {
            add,
            remove,
            print

        }
        function add(text) {
            return result.push(text)
        }
        function remove(text) {
            return result = result.filter(el => el !== text);
        }
        function print() {
            return console.log(result.join(`,`));

        }
    }
    let processor = createProcessor();

    for (const el of arr) {
        const [command, text] = el.split(` `);
        processor[command](text);

    }

}
solution(['add hello', 'add again', 'remove hello', 'add again', 'print'])