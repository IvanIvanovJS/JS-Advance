import { render } from "../../node_modules/lit-html/lit-html.js"
import { updateNav } from "./nav.js";
const root = document.getElementById("main-element")
function myRender(temp) {
    return render(temp, root)
}

function updateCTX(ctx, next) {
    ctx.render = myRender;
    updateNav()
    next()
}
export {
    updateCTX
}