import { html } from "../../node_modules/lit-html/lit-html.js"
import { login } from "../api/userService.js"
import { createSubmitHandler } from "../service/formService.js"
import { notify } from "../service/nothify.js"
import { setUserData } from "../service/userData.js"

const temp = (ctx) => html`  <section id="login">
        <div class="form" >
          <h2>Login</h2>
          <form class="login-form" @submit=${(e) => onSubmit(e, ctx)}>
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
              Not registered? <a href="/register">Create an account</a>
            </p>
          </form>
        </div>
      </section>`


export function showLogin(ctx) {

    ctx.render(temp(ctx))
}
async function onSubmit(e, ctx) {
    const { email, password } = createSubmitHandler(e)

    try {
        if (!email || !password) {
            throw new Error("All fields are requierd!")
        }
        const data = await login({ email, password })


        setUserData(data)
        ctx.page.redirect("/")

    } catch (error) {
        return notify(error.message)
    }
}

