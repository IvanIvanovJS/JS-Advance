import { html } from "../../node_modules/lit-html/lit-html.js";
import { getFurnitureById } from "../services/dataService.js";
import { userUtility } from "../utility/userUtils.js";

export async function showDetailsView(ctx) {
    const id = ctx.params.id
    const { _ownerId, description,
        img,
        make,
        material,
        model,
        price,
        year
    } = await getFurnitureById(id)

    const temp = html`
      <div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src=${img} />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Make: <span>${make}</span></p>
                <p>Model: <span>${model}</span></p>
                <p>Year: <span>${year}</span></p>
                <p>Description: <span>${description}</span></p>
                <p>Price: <span>$${price}</span></p>
                <p>Material: <span>${material}</span></p>
                ${_ownerId == userUtility.getUserData().id ? btnTemp(id) : ""}
            </div>
        </div>`
    ctx.render(temp)
}

function btnTemp(id) {
    return html`
    <div>
                    <a href=/edit/${id} class="btn btn-info">Edit</a>
                    <a href=/delete/${id} class="btn btn-red">Delete</a>
                </div>
    `
}