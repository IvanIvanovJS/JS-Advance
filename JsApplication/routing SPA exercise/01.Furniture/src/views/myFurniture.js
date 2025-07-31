import { html } from "../../node_modules/lit-html/lit-html.js";
import { getMyFurniture } from "../services/dataService.js";
import { userUtility } from "../utility/userUtils.js";
let contex = null;
export async function showMyFurniture(ctx) {
    contex = ctx;

    ctx.render(await myFurnitureTemp())
}

async function myFurnitureTemp() {
    const id = contex.params.id
    const userId = userUtility.getUserData().id
    const data = await getMyFurniture(userId)

    return html` <div class="row space-top">
            <div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
            </div>
        </div>
        <div class="row space-top">
            ${data.map(f => furnitureTemp(f))}
        </div>
    `
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