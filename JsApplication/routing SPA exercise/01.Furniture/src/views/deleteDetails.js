import { deleteById } from "../services/dataService.js";


export function onDelete(ctx) {
    const id = ctx.params.id
    if (confirm("Deleting furniture")) {
        deleteById(id)
        ctx.page.redirect("/dashboard")
    }

}