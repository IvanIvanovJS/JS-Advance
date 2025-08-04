import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../api/userService.js";
import { formSubmitHandler } from "../service/formService.js";
import { setUserData } from "../service/userData.js";

function showLogin(ctx) {
    ctx.render(loginTemp(ctx))
}

function loginTemp(ctx) {
    return html`
      <section id="login">
                <article class="narrow">
                    <header class="pad-med">
                        <h1>Login</h1>
                    </header>
                    <form @submit=${(e) => onSubmit(e, ctx)} id="login-form" class="main-form pad-large">
                        <div class="error" style="display: none">Error message.</div>
                        <label>E-mail: <input type="text" name="email"></label>
                        <label>Password: <input type="password" name="password"></label>
                        <input class="action cta" type="submit" value="Sign In">
                    </form>
                    <footer class="pad-small">Don't have an account? <a href="/register" class="invert">Sign up here</a>
                    </footer>
                </article>
            </section>`
}

async function onSubmit(e, ctx) {
    const { email, password } = formSubmitHandler(e)
    const errorRef = e.currentTarget.querySelector(".error")
    errorRef.style.display = "none"
    try {
        if (!email) {
            throw new Error("Email is requierd!")
        }
        if (!password) {
            throw new Error("Password is requierd!")
        }
        const data = await login({ email, password })
        setUserData(data)

        ctx.page.redirect("/myteams")
    } catch (error) {
        errorRef.style.display = "block"
        return errorRef.textContent = error.message
    }
}

export {
    showLogin
}