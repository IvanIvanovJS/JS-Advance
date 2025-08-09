import { html } from "../../node_modules/lit-html/lit-html.js";
import { searchByText } from "../api/dataService.js";
import { createSubmitHandler } from "../service/formService.js";

const temp = (ctx) => html`   <section id="search">

          <div class="form">
            <h2>Search</h2>
            <form class="search-form" @submit=${createSubmitHandler(onSubmit.bind(null, ctx))}>
              <input
                type="text"
                name="search"
                id="search-input"
              />
              <button class="button-list">Search</button>
            </form>
          </div>
          <h4>Results:</h4>
            <div class="search-result">
                       <!--If there are matches display a div with information about every show-->
           
            </div>
                  </section>`
const movieTemp = (data) => html`
<div class="show">
              <img src=${data.imageUrl} alt="example1" />
              <div class="show">
                <h3 class="title">${data.title}</h3>
                <p class="genre">Genre:${data.genre}</p>
                <p class="country-of-origin">Country of Origin: ${data.country}</p>
                <a class="details-btn" href="/details/${data._id}">Details</a>
              </div>
              </div>
`
const resultTemp = (data, ctx) => html`
<section id="search">

          <div class="form">
            <h2>Search</h2>
            <form class="search-form" @submit=${createSubmitHandler(onSubmit.bind(null, ctx))}>
              <input
                type="text"
                name="search"
                id="search-input"
              />
              <button class="button-list">Search</button>
            </form>
          </div>
          <h4>Results:</h4>
            <div class="search-result">
           
            <!--If there are matches display a div with information about every show-->
           ${data.length ? data.map(movieTemp) : html`<p class="no-result">There is no TV show with this title</p>`}
            </div>
                  </section>
`
export function showSearch(ctx) {
    ctx.render(temp(ctx))
}
async function onSubmit(ctx, query) {
    const { search } = query
    if (!search) {
        return
    }
    const data = await searchByText(search)

    ctx.render(resultTemp(data, ctx))
}


