import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllFurniture } from "../services/dataService.js";

export async function showDashboardView(ctx) {
    const data = await getAllFurniture()

    const temp = html`
     <div class="row space-top">
            <div class="col-md-12">
                <h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>
            </div>
        </div>
        <div class="row space-top">
            ${data.map(f => furnitureTemp(f))}
        </div>`
    ctx.render(temp)


}


function furnitureTemp({ _id, description, img, price }) {
    return html`
     <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src=${img} />
                        <p>${description}</p>
                        <footer>
                            <p>Price: <span>${price} $</span></p>
                        </footer>
                        <div>
                                                       <a href=/details/${_id} class="btn btn-info">Details</a>
                        </div>
                    </div>
                </div>
            </div>
    `
}
