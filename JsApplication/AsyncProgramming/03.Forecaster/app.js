

function attachEvents() {
    document.getElementById("submit").addEventListener("click", submit)
    const BASE_URL = "http://localhost:3030/jsonstore/forecaster/"
    const inputRef = document.getElementById("location")
    const currentRef = document.getElementById("current")
    const locationRef = document.getElementById("forecast")
    const upcomingRef = document.getElementById("upcoming")
    const forecastsDivRef = document.createElement("div")
    const apiEndpoints = {
        locations: "locations",
        today: "",
        upcoming: ""

    }

    const enumSymbols = {
        'Sunny': `☀`,
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
        'Degrees': '°'
    }
    async function submit() {
        try {
            const locationUrl = await fetch(BASE_URL + apiEndpoints.locations);
            const dataLocation = await locationUrl.json();


            let location = dataLocation.find(x => x.name === inputRef.value)
            apiEndpoints.today = `today/${location.code}`
            const todayUrl = await fetch(BASE_URL + apiEndpoints.today)
            const todayData = await todayUrl.json()
            locationRef.style.display = "block"

            forecastsDivRef.classList.add("forecasts")
            currentRef.appendChild(forecastsDivRef)
            forecastsDivRef.appendChild(spanCreate("condition symbol", `${enumSymbols[todayData.forecast.condition]}`))
            let conditionSpanRef = spanCreate("condition")
            forecastsDivRef.appendChild(conditionSpanRef)

            conditionSpanRef.appendChild(spanCreate("forecast-data", todayData.name))
            conditionSpanRef.appendChild(spanCreate("forecast-data", `${todayData.forecast.low}${enumSymbols.Degrees}/${todayData.forecast.high}${enumSymbols.Degrees}`))
            conditionSpanRef.appendChild(spanCreate("forecast-data", todayData.forecast.condition))
            apiEndpoints.upcoming = `upcoming/${location.code}`
            const upcomingUrl = await fetch(BASE_URL + apiEndpoints.upcoming)
            const upcomingData = await upcomingUrl.json()

            let upcomingDataArray = upcomingData.forecast;
            const forecastInfoDiv = document.createElement("div");
            forecastInfoDiv.classList.add("forecast-info")
            upcomingRef.appendChild(forecastInfoDiv)
            upcomingDataArray.forEach(element => {
                let upcomingSpanRef = spanCreate("upcoming")
                forecastInfoDiv.appendChild(upcomingSpanRef)
                upcomingSpanRef.appendChild(spanCreate("symbol", enumSymbols[element.condition]))
                upcomingSpanRef.appendChild(spanCreate("forecast-data", `${element.low}${enumSymbols.Degrees}/${element.high}${enumSymbols.Degrees}`))
                upcomingSpanRef.appendChild(spanCreate("forecast-data", element.condition))
            });

        } catch (error) {
            locationRef.style.display = "block"
            locationRef.textContent = "Error"
        }

    }
    function spanCreate(className, text) {
        let span = document.createElement("span")
        span.className = className
        span.textContent = text
        return span
    }
}

attachEvents();