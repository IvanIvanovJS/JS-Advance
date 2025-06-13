function previousDay(year, month, day) {
    let currentDay = new Date(year, month - 1, day - 1);
    console.log(`${currentDay.getFullYear()}-${currentDay.getMonth() + 1}-${currentDay.getDate()}`)

}
previousDay(2017, 2, 30)