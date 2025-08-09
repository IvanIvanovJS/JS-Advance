import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllOffers } from "../api/dataService.js";
const offerTemp = (o) => html`<div class="offer">
          <img src="${o.imageUrl}" alt="example1" />
          <p>
            <strong>Title: </strong><span class="title">${o.title}</span>
          </p>
          <p><strong>Salary:</strong><span class="salary">${o.salary}</span></p>
          <a class="details-btn" href="/details/${o._id}">Details</a>
        </div>
`

const temp = (data) => html`<section id="dashboard">
        <h2>Job Offers</h2>

       ${data.length ? data.map(offerTemp) : html`<h2>No offers yet.</h2>`}

        <!-- Display an h2 if there are no posts -->
        
      </section>
        `
export async function showDashobard(ctx) {
  const data = await getAllOffers()

  ctx.render(temp(data))
}

