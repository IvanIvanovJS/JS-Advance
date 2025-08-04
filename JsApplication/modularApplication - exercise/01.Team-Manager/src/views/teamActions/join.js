import { getTeamById, sendJoinRequest } from "../../api/dataService.js";

async function joinTeam(ctx) {
    const id = ctx.params.id
    const team = await getTeamById(id)
    const teamId = team._id
    await sendJoinRequest({ teamId })
}



export {
    joinTeam
}