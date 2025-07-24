const nav = document.querySelector("nav")
const main = document.querySelector("main")
let views = {}
export async function navigate(id, ...params) {
    const view = views[id];
    if (typeof view == "function") {
        const section = await view(...params)

        if (section) {
            main.replaceChildren(section)
        }

    }

}
export function initNav(initViews) {
    views = initViews
    nav.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.target.id;
        navigate(id)
    })
}