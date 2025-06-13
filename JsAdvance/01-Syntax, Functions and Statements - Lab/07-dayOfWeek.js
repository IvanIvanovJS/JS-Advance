function daysOfWeek(input) {
    let weekDays = [``, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`];
    if (weekDays.includes(input)) {
        console.log(weekDays.indexOf(input));
    } else {
        console.log(`error`);

    }
}
daysOfWeek(`s`)
