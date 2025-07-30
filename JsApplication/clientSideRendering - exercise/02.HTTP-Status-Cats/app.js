import { cats } from "./catSeeder.js"
import { html, render } from "./node_modules/lit-html/lit-html.js"
const root = document.querySelector("#allCats")

render(createTemplate(), root)

function createTemplate() {
    const temp = cats.map(cat => html`<li>${createCatTemplate(cat)}</li>`)

    return html` <ul>
        ${temp}
    </ul>
    `
}

function createCatTemplate(cat) {

    return html`
                <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                <div class="info">
                    <button class="showBtn" @click=${onClick}>Show status code</button>
                    <div class="status" style="display: none" id=${cat.statusCode}>
                        <h4 class="card-title">Status Code: ${cat.statusCode}</h4>
                        <p class="card-text">${cat.statusMessage}</p>
                    </div>
                </div>
            `
}
function onClick(e) {
    e.preventDefault()

    const infoRef = e.target.parentElement
    const btn = e.target
    const moreInfo = infoRef.querySelector(".status")

    if (e.target.textContent == "Show status code") {
        moreInfo.style.display = ""
        btn.textContent = "Hide status code"
    } else {
        moreInfo.style.display = "none"
        btn.textContent = "Show status code"
    }


}
