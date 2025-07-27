import { create } from "../api/data.js";
import { navigate } from "../utils/nav.js";
import { getSection, showView } from "./views.js";

const section = getSection('[data-section="create"]')

function showCreateView() {
    showView(section)
}
section.querySelector("form").addEventListener("submit", createIdea)

async function createIdea(e) {
    e.preventDefault();
    try {
        const formData = new FormData(e.target)
        const { title, description, imageURL } = Object.fromEntries(formData);
        if (title.length < 6) throw new Error("The title should be at least 6 characters long.")
        if (description.length < 10) throw new Error("The description should be at least 10 characters long.")
        if (imageURL.length < 5) throw new Error("The image should be at least 5 characters long.");
        await create(title, description, imageURL)
        section.querySelector("form").reset()
        navigate("Dashboard")

    } catch (error) {
        alert(error.message)
    }
}


export {
    showCreateView
}