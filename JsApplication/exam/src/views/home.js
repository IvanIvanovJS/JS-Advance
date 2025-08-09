import { html } from "../../node_modules/lit-html/lit-html.js"

const temp = () => html`  <section id="home">
        <img src="/images/home.webp" alt="home" />
        <p>Welcome to MindNest - your safe haven for mental wellness and mindfulness. Discover expert tips, guided
          meditations, and a supportive community sharing insights to help you find calm, balance, and inner peace every
          day. Join us and nurture your mind with care.</p>
      </section>`


export function showHome(ctx) {

    ctx.render(temp())
}