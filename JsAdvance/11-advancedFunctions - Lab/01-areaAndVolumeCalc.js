function solve(area, vol, JSonData) {
    let data = JSON.parse(JSonData);
    let result = []
    for (const row of data) {
        result.push({
            area: area.call(row),
            volume: vol.call(row)
        })


    }
    return result;

}
function area() {
    return Math.abs(this.x * this.y);
};
function vol() {
    return Math.abs(this.x * this.y * this.z);
};
solve(area, vol, `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`
)