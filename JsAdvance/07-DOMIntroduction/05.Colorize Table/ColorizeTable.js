function colorize() {
    let table = document.getElementsByTagName("tr")
    let data = Array.from(table);
    for (let i = 1; i < data.length; i += 2) {
        data[i].style.backgroundColor = `teal`

    }
}