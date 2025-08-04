import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/userService.js";
import { formSubmitHandler } from "../service/formService.js";
import { setUserData } from "../service/userData.js";

function showRegister(ctx) {
    ctx.render(registerTemp(ctx))
}

function registerTemp(ctx) {
    return html`
    <section id="register">
                <article class="narrow">
                    <header class="pad-med">
                        <h1>Register</h1>
                    </header>
                    <form @submit=${(e) => onSubmit(e, ctx)} id="register-form" class="main-form pad-large">
                        <div class="error" style="display: none">Error message.</div>
                        <label>E-mail: <input type="text" name="email"></label>
                        <label>Username: <input type="text" name="username"></label>
                        <label>Password: <input type="password" name="password"></label>
                        <label>Repeat: <input type="password" name="repass"></label>
                        <input class="action cta" type="submit" value="Create Account">
                    </form>
                    <footer class="pad-small">Already have an account? <a href="/login" class="invert">Sign in here</a>
                    </footer>
                </article>
            </section>`
}
async function onSubmit(e, ctx) {
    const { email, username, password, repass } = formSubmitHandler(e)
    const errorRef = e.currentTarget.querySelector(".error")
    errorRef.style.display = "none"
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    try {
        if (!regex.test(email)) {
            throw new Error("Invalid Email address!")
        }
        if (username.length < 3) {
            throw new Error("Username must be at least 3 characters!")
        }
        if (password.length < 3) {
            throw new Error("Password must be at least 3 characters!")
        }
        if (password !== repass) {
            throw new Error("Passwords must match!")
        }
        const data = await register({ email, username, password })

        setUserData(data)
        ctx.page.redirect("/myteams")
    }
    catch (error) {
        errorRef.style.display = "block"
        return errorRef.textContent = error.message
    }

}

export {
    showRegister
}