
import { getUserData } from "../service/userData.js"
import { get } from "./requester.js"



const api = {
    all: "http://localhost:3030/data/teams",
    members: "http://localhost:3030/data/members?where=status%3D%22member%22",
    myTeams: myTeams
}

async function getAllTeams() {

    return get(api.all)
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

export {
    getAllTeams,
    getAllMembers,
    getMyTeams
}