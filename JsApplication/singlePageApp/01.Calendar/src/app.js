import { showMonths } from "./months.js"
import { showView } from "./utils.js";
const section = document.getElementById("years")
showView(section)
showYears()
export function showYears() {
    const years = Array.from(section.querySelectorAll(".date"));
    for (const year of years) {
        year.parentElement.addEventListener("click", () => {
            showMonths(year.textContent)
        })
    }
}

