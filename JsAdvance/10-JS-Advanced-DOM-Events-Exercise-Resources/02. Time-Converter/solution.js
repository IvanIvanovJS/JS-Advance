function attachEventsListeners() {
    let divs = document.querySelectorAll("div")


    let data = {

    }
    for (const div of divs) {
        let name = div.children[0].textContent;
        let text = div.children[1];
        let button = div.children[2];


        data[name] = [text, button]

        let input = data[name][0];
        let buttons = data[name][1]

        buttons.addEventListener("click", () => {
            let days = document.getElementById("days")
            let hours = document.getElementById("hours");
            let minutes = document.getElementById("minutes")
            let seconds = document.getElementById("seconds")


            if (buttons.id === "daysBtn") {

                hours.value = Number(days.value) * 24;
                minutes.value = Number(days.value) * 24 * 60;
                seconds.value = Number(days.value) * 24 * 60 * 60;

            } else if (buttons.id === "hoursBtn") {
                days.value = Number(hours.value) / 24;
                minutes.value = Number(hours.value) * 60;
                seconds.value = Number(hours.value) * 60 * 60;
            } else if (buttons.id === "minutesBtn") {
                days.value = Number(minutes.value) / 60 / 24;
                hours.value = Number(minutes.value) / 60;
                seconds.value = Number(minutes.value) * 60;
            } else if (buttons.id === "secondsBtn") {
                days.value = Number(seconds.value) / 60 / 60 / 24;
                hours.value = Number(seconds.value) / 60 / 60;
                minutes.value = Number(seconds.value) / 60;
            }





        })

    }








}
