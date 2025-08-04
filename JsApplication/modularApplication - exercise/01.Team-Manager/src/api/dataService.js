
import { getUserData } from "../service/userData.js"
import { get, post } from "./requester.js"



const api = {
    teams: "http://localhost:3030/data/teams",
    members: "http://localhost:3030/data/members?where=status%3D%22member%22",
    myTeams: myTeams
}

async function getAllTeams() {

    return get(api.teams)
}
async function getAllMembers() {
    return get(api.members)
}
async function getMyTeams() {

    return get(api.myTeams())
}
function myTeams() {
    const userData = getUserData()
    if (!userData) return [];

    return `http://localhost:3030/data/members?where=_ownerId%3D%22${userData.id}%22%20AND%20status%3D%22member%22&load=team%3DteamId%3Ateams`;

}
function createTeam(data) {
    return post(api.teams, data)
}
function getTeamById(id) {
    return get(api.teams + `/${id}`)
}
function getMembershipsById(id) {
    return get(`http://localhost:3030/data/members?where=teamId%3D%22${id}%22&load=user%3D_ownerId%3Ausers`)
}
function sendJoinRequest(id) {
    return post(`http://localhost:3030/data/members`, id)
}


export {
    getAllTeams,
    getAllMembers,
    getMyTeams,
    createTeam,
    getTeamById,
    getMembershipsById,
    sendJoinRequest
}