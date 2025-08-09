import { html } from "../../node_modules/lit-html/lit-html.js"
import { getAllTips } from "../api/dataService.js"

const temp = (data) => html` <h3 class="heading">Mindful Tips</h3>
      <section id="tips-dashboard">
        <!-- Display a div with information about every post (if any)-->
        ${data.length ? data.map(tipTemp) : html`<h3 class="empty">No Mindful Tips Added Yet.</h3>`}
        
      </section>
      <!-- Display an h3 if there are no posts -->
      `


export async function showCatalog(ctx) {
  const data = await getAllTips()
  ctx.render(temp(data))

}

const tipTemp = (t) => html`<div class="tip">
          <img src="${t.imageUrl}" alt="example1" />
          <h3 class="title">${t.title}</h3>
          <div class="tip-info">
            <p class="type">Type: ${t.type}</p>
            <p class="difficulty">Difficulty: ${t.difficulty}</p>
          </div>
          <a class="details-btn" href="/details/${t._id}">View Tip</a>
        </div>
`