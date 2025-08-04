import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getAllMembers, getMyTeams } from "../api/dataService.js";

async function showTeam(ctx) {
    ctx.render(await myTeamsTemplate(ctx))

}

async function myTeamsTemplate(ctx) {
    const data = await getMyTeams()
    const members = await getAllMembers()
    return html`
    <section id="my-teams">

                <article class="pad-med">
                    <h1>My Teams</h1>
                </article>

                <article class="layout narrow">
                    <div class="pad-med">
                        ${!data.length ? html`<p>You are not a member of any team yet.</p>
                        <p><a href="#">Browse all teams</a> to join one, or use the button bellow to cerate your own
                            team.</p>` : nothing}
                    </div>
                    <div class=""><a href="/create" class="action cta">Create Team</a></div>
                </article>
          
                ${data.map(t => teamTemplate(t, members))}

            </section>`
}
function teamTemplate(data, members) {
    const currentMembers = members.filter(m => m.teamId == data.teamId)
    return html`
    <article class="layout">
                    <img src=${data.team.logoUrl} class="team-logo left-col">
                    <div class="tm-preview">
                        <h2>${data.team.name}</h2>
                        <p>${data.team.description}</p>
                        <span class="details">${currentMembers.length} Members</span>
                        <div><a href="/details/${data.teamId}" class="action">See details</a></div>
                    </div>
                </article>
    `
}
export {
    showTeam
}