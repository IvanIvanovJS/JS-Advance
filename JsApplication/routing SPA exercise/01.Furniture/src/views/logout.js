import { logout } from "../services/userService.js";


export async function onLogout(ctx) {
    await logout()
    ctx.page.redirect("/login")
}