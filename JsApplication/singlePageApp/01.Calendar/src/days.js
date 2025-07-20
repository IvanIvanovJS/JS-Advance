import { showView } from "./utils.js";
const sections = document.querySelectorAll(".daysCalendar")
export function showDays(yearText, monthText) {
    const months = Array.from(sections);
    for (const month of months) {
        const caption = month.querySelector("caption")
        if (caption.textContent.includes(yearText) && caption.textContent.includes(monthText)) {
            showView(month)
        }
    }
}