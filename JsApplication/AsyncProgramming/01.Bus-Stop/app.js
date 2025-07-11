async function getInfo() {
    const BASE_URL = "http://localhost:3030/jsonstore/bus/businfo/";

    const inputInfoRef = document.getElementById("stopId");
    const stationNameRef = document.getElementById("stopName");
    const stationBoard = document.getElementById("buses")
    stationBoard.replaceChildren();

    try {
        const response = await fetch(BASE_URL + inputInfoRef.value);
        const data = await response.json();
        inputInfoRef.value = "";

        stationNameRef.textContent = data.name;

        let busInfo = Object.entries(data.buses)
        busInfo.forEach(([busNumber, busTime]) => {
            let list = document.createElement("li")
            list.textContent = `Bus ${busNumber} arrives in ${busTime} minutes`
            stationBoard.appendChild(list)
        });
    } catch (error) {
        inputInfoRef.value = "";
        stationNameRef.textContent = "Error"
    }



}