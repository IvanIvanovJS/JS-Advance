// @ts-nocheck

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

function createAssemblyLine() {

    let test = {
        hasClima: (car) => {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = () => {
                if (car.temp < car.tempSettings) {
                    car.temp++;
                } else if (car.temp > car.tempSettings) {
                    car.temp--;
                }
            };
        },
        hasAudio: (car) => {
            car.currentTrack = null;
            car.nowPlaying = function () {
                if (car.currentTrack) {
                    console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);
                }

            };
        },
        hasParktronic: (car) => {
            car.checkDistance = function (num) {
                let signal = "";
                if (num < 0.1) {
                    signal = "Beep! Beep! Beep!";
                } else if (num < 0.25) {
                    signal = "Beep! Beep!";
                } else if (num < 0.5) {
                    signal = "Beep!";
                }
                return console.log(signal);

            };
        }
    }


}



