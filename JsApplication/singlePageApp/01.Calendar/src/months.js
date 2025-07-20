import { showView } from "./utils.js"
import { showDays } from "./days.js"
const sections = document.querySelectorAll(".monthCalendar")
export function showMonths(yearText) {
    const years = Array.from(sections)
    for (const year of years) {
        if (year.id.includes(yearText)) {
            year.addEventListener('click', (event) => {
                const monthNameRef = event.target.querySelector(".date");
                const monthTxt = monthNameRef.textContent
                showDays(yearText, monthTxt)
            })

            showView(year)
        }
    }
}   