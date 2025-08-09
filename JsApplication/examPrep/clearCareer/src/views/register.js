import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/userService.js";
import { createSubmitHandler } from "../service/formService.js";
import { setUserData } from "../service/userData.js";

const temp = (ctx) => html` <section id="register">
          <div class="form">
            <h2>Register</h2>
            <form class="login-form" @submit=${createSubmitHandler(onSubmit.bind(null, ctx))}>
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
          </div>
        </section>`
export function showRegister(ctx) {
  ctx.render(temp(ctx))
}

async function onSubmit(ctx, data) {

  const { email, password } = data
  const rePass = data["re-password"]
  try {
    if (!email || !password) {
      throw new Error("All fields are requierd!")
    }
    if (password !== rePass) {
      throw new Error("Passwords must match!")
    }

    const resData = await register({ email, password })
    setUserData(resData)
    ctx.page.redirect("/")
  } catch (error) {
    return alert(error.message)
  }
}