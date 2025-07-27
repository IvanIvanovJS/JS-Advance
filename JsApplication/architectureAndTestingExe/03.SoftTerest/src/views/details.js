import { details } from "../api/data.js";
import { navigate } from "../utils/nav.js";
import { getUserData } from "../utils/userdata.js";
import { onDelete } from "./delete.js";
import { getSection, showView } from "./views.js";
const section = getSection('[data-section="details"]')

async function getDetails(id) {
    const data = await details(id)
    createDetailsView(data)
}
function createDetailsView(data) {


    if (!getUserData() || getUserData().id !== data._ownerId) {
        section.innerHTML = `<img class="det-img" src="${data.img}" />
        <div class="desc">
            <h2 class="display-5">${data.title}</h2>
            <p class="infoType">Description:</p>
            <p class="idea-description">${data.description}</p>
        </div>
       `
    } else {
        section.innerHTML = `<img class="det-img" src="${data.img}" />
        <div class="desc">
            <h2 class="display-5">${data.title}</h2>
            <p class="infoType">Description:</p>
            <p class="idea-description">${data.description}</p>
        </div>
        <div class="text-center">
            <a class="btn detb" href="">Delete</a>
        </div>`
        const btn = section.querySelector("a.btn")
        btn.addEventListener("click", onClick)
    }


    function onClick(e) {
        e.preventDefault()
        onDelete(data._id)
    }
    navigate("Details")
}


function showDetailsView() {
    showView(section)
}

export {
    getDetails,
    showDetailsView
}