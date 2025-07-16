function solve() {
    const BASE_URL = "http://localhost:3030/jsonstore/bus/schedule/"
    const infoBoxRef = document.querySelector(".info")
    const departBtnRef = document.getElementById("depart")
    const arriveBtnRef = document.getElementById("arrive")
    const busInfo = {
        currentStop: "",
        nextStop: "depot"
    }


    async function depart() {
        try {
            let response = await fetch(BASE_URL + busInfo.nextStop)
            let data = await response.json()
            infoBoxRef.textContent = `Next stop ${data.name}`;
            busInfo.nextStop = data.next;
            busInfo.currentStop = data.name;
            departBtnRef.disabled = true;
            arriveBtnRef.disabled = false;
        } catch (error) {
            departBtnRef.disabled = true;
            arriveBtnRef.disabled = true;
            infoBoxRef.textContent = `Error`;

        }

    }


    function arrive() {
        departBtnRef.disabled = false;
        arriveBtnRef.disabled = true;
        infoBoxRef.textContent = `Arriving at ${busInfo.currentStop}`;
    }
    return {
        depart,
        arrive
    };


}



let result = solve();
