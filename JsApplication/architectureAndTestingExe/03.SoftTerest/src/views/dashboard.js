import { getAllIdeas } from "../api/data.js"
import { getDetails } from "./details.js"
import { showView } from "./views.js"

const section = document.querySelector("#dashboard-holder")
function showDashboardView() {
    showView(section)
    loadIdeas()
}
async function loadIdeas() {
    const data = await getAllIdeas();
    section.replaceChildren()
    if (data) {

        data.forEach(idea => {
            const element = document.createElement("div")
            element.className = "card overflow-hidden current-card details"
            element.style.height = "18rem"
            element.style.width = "20rem"
            element.innerHTML = `<div class="card-body" data-id="${idea._id}">
                <p class="card-text">${idea.title}</p>
            </div>
            <img class="card-image" src="${idea.img}" alt="Card image cap">
            <a class="btn" href="">Details</a>`
            section.appendChild(element)
            element.querySelector("a.btn").addEventListener("click", onClick)

        })
    } else {
        const h1 = document.createElement("h1")
        h1.textContent = "No ideas yet! Be the first one :)"
        section.appendChild(h1)
    }


}
function onClick(e) {
    e.preventDefault()
    const id = e.target.parentElement.querySelector("div.card-body").dataset.id;
    getDetails(id)

}



export {
    showDashboardView
}