function generateReport() {
    let tableHeadersRef = document.querySelectorAll("thead tr th");
    let tableRowRef = document.querySelectorAll("tbody tr");
    let outputRef = document.getElementById("output")

    let arrayOfHeaders = Array.from(tableHeadersRef);
    let headerToDisplay = new Map();
    for (let i = 0; i < arrayOfHeaders.length; i++) {
        let th = arrayOfHeaders[i];
        let checked = th.querySelector("input").checked;

        if (checked) {
            let headerName = th.textContent.trim().toLowerCase();
            headerToDisplay.set(i, headerName);
        }
    }
    let result = [];
    tableRowRef.forEach(row => {
        let rowData = {};
        headerToDisplay.forEach((value, key) => {
            let currentRowText = row.cells[key].textContent;

            rowData[value] = currentRowText;
        })
        result.push(rowData)

    });

    outputRef.value = JSON.stringify(result);

}