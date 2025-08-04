import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getAllMembers, getAllTeams } from "../api/dataService.js";
import { getUserData } from "../service/userData.js";

async function showBrowse(ctx) {
    ctx.render(await browseTemp())
}

async function browseTemp() {
    const userData = getUserData()


    const teams = await getAllTeams()
    const members = await getAllMembers()

    return html`
     <section id="browse">

                <article class="pad-med">
                    <h1>Team Browser</h1>
                </article>
                ${userData ? html`<article class="layout narrow">
                    <div class="pad-small"><a href="#" class="action cta">Create Team</a></div>
                </article>` : nothing}
                ${layoutTemp(teams, members)}              

                    </div>
                </article>

            </section>
`
}
function layoutTemp(teams, members) {

    const temp = []
    for (const team of teams) {
        const teamId = team._id
        const currentMembers = members.filter(m => m.teamId == teamId)

        temp.push(html`
        
      <article class="layout">
                    <img src=${team.logoUrl} class="team-logo left-col">
                    <div class="tm-preview">
                        <h2>${team.name}</h2>
                        <p>${team.description}</p>
                        <span class="details">${currentMembers.length} Members</span>
                        <div><a href="/details" class="action">See details</a></div>
                    </div>
                </article>`)
    }
    return temp

}

export {
    showBrowse
}