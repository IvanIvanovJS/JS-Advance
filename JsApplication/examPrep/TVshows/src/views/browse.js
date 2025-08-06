import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllMovies } from "../api/dataService.js";
const movieTemp = (m) => html`<div class="show">
            <img src=${m.imageUrl} alt="example1" />
            <div class="show-info">
              <h3 class="title">${m.title}</h3>
              <p class="genre">Genre: ${m.genre}</p>
              <p class="country-of-origin">Country of Origin: ${m.country}</p>
              <a class="details-btn" href="/details/${m._id}">Details</a>
            </div>
          </div>
`

const temp = (data) => html`<h2>Users Recommendations</h2>
        <section id="shows">
        ${data.length ? data.map(movieTemp) : html`<h2 id="no-show">No shows Added.</h2>`}        
        </section>
        <!-- Display an h2 if there are no posts -->
        `
export async function showBrowser(ctx) {
    const data = await getAllMovies()

    ctx.render(temp(data))
}

