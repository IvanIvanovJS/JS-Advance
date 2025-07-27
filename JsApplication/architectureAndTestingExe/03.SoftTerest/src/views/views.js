import { showFooter, showNavBar } from "../utils/nav.js";

/**
 * Returns DOM Element by dataset selector.
 * @param {string} dataset - '[data-section="section"]'.
 * @returns {HTMLDivElement | null} - Found DOM Element or null.
 */
function getSection(dataset) {
    const section = document.querySelector(dataset)
    return section;
}

function showView(section) {

    return document.body.replaceChildren(showNavBar(), section, showFooter())
}

export {
    getSection,
    showView
}