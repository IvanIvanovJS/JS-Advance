function timeToWalk(steps, length, speed) {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let totalDistance = steps * length;
    let speedInMeters = speed * 1000 / 3600;
    let time = totalDistance / speedInMeters / 60
    if (totalDistance > 500) {
        for (let i = 500; i <= totalDistance; i += 500) {
            time += 1;
        }
    }

    if (time < 60) {
        minutes = Math.trunc(time);
        seconds = Math.round((time - minutes) * 60);
    } else {
        for (let i = 60; i <= time; i += 60) {
            hours++;
        }
        minutes = Math.trunc(time % 60);
        seconds = Math.round(((time % 60) - minutes) * 60);
    }
    if (hours < 10) {
        // @ts-ignore
        hours = `0` + hours;
    }
    if (minutes < 10) {
        // @ts-ignore
        minutes = `0` + minutes;
    }
    if (seconds < 10) {
        // @ts-ignore
        seconds = `0` + minutes;
    }
    console.log(`${hours}:${minutes}:${seconds}`);




}
timeToWalk(25640, 0.70, 5.5)