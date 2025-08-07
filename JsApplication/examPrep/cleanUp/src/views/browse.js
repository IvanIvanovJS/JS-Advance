import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllSolutions } from "../api/dataService.js";
const solutionTemp = (s) => html`<div class="solution">
            <img src="${s.imageUrl}" alt="example1" />
            <div class="solution-info">
              <h3 class="type">${s.type}</h3>
              <p class="description">
               ${s.description}
              </p>
              <a class="details-btn" href="/details/${s._id}">Learn More</a>
            </div>
          </div>
`

const temp = (data) => html`<h2>Solutions</h2>
        <section id="solutions">
         ${data.length ? data.map(solutionTemp) : html`<h2 id="no-solution">No Solutions Added.</h2>`}
          
        
          </div>
        </section>
        `
export async function showDashobard(ctx) {
  const data = await getAllSolutions()

  ctx.render(temp(data))
}

