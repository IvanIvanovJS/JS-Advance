import { html } from "../../node_modules/lit-html/lit-html.js";
import { getMembershipsById, getTeamById } from "../api/dataService.js";
import { joinTeam } from "./teamActions/join.js";

async function showDetails(ctx) {
    const teamId = ctx.params.id

    ctx.render(await detailsTemplate(ctx, teamId))
}

async function detailsTemplate(ctx, teamId) {
    const data = await getTeamById(teamId)
    const membersData = await getMembershipsById(teamId)


    return html`
    <section id="team-home">
                <article class="layout">
                    <img src=${data.logoUrl} class="team-logo left-col">
                    <div class="tm-preview">
                        <h2>${data.name}</h2>
                        <p>${data.description}</p>
                        <span class="details">3 Members</span>
                        <div>
                            <a href="#" class="action">Edit team</a>
                            <a @click=${(e) => onJoin(e, ctx)} href="javascript:void(0)" class="action">Join team</a>
                            <a href="#" class="action invert">Leave team</a>
                            Membership pending. <a href="#">Cancel request</a>
                        </div>
                    </div>
                    <div class="pad-large">
                        <h3>Members</h3>
                        <ul class="tm-members">
                            <li>My Username</li>
                            <li>James<a href="#" class="tm-control action">Remove from team</a></li>
                            <li>Meowth<a href="#" class="tm-control action">Remove from team</a></li>
                        </ul>
                    </div>
                    <div class="pad-large">
                        <h3>Membership Requests</h3>
                        <ul class="tm-members">
                            <li>John<a href="#" class="tm-control action">Approve</a><a href="#"
                                    class="tm-control action">Decline</a></li>
                            <li>Preya<a href="#" class="tm-control action">Approve</a><a href="#"
                                    class="tm-control action">Decline</a></li>
                        </ul>
                    </div>
                </article>
            </section>
    `
}
function onJoin(e, ctx) {
    e.preventDefault()
    joinTeam(ctx)
}

export {
    showDetails
}