import { logout } from "../api/userService.js"
import { clearUserData } from "../service/userData.js"

async function onLogout(ctx) {
    try {
        await logout()
        clearUserData()
        ctx.page.redirect("/")
    } catch (error) {
        return alert(error)
    }


}

export {
    onLogout
}