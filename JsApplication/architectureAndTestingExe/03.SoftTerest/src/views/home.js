
import { showView, getSection } from "./views.js"

const section = getSection('[data-section="home"]')

function showHomeView() {
    showView(section)
}

export {
    showHomeView
}