import { html } from "../../node_modules/lit-html/lit-html.js"
import { getAllDrones } from "../api/dataService.js"

const temp = (data) => html`  <h3 class="heading">Marketplace</h3>
        <section id="dashboard">
    
        <!-- Display a div with information about every post (if any)-->
        ${data.length > 0 ? data.map((d) => droneTemp(d)) : html`<h3 class="no-drones">No Drones Available</h3>`}
        
        </section>`


export async function showCatalog(ctx) {
    const data = await getAllDrones()
    ctx.render(temp(data))

}

const droneTemp = (d) => html`<div class="drone">
          <img src=${d.imageUrl} alt="example1" />
          <h3 class="model">${d.model}</h3>
          <div class="drone-info">
            <p class="price">Price: €${d.price}</p>
            <p class="condition">Condition: ${d.condition}</p>
            <p class="weight">Weight: ${d.weight}g</p>
          </div>
          <a class="details-btn" href="/details/${d._id}">Details</a>
        </div>
`