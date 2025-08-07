
import { del, get, post, put } from "./requester.js"


const host = "http://localhost:3030"
const api = {
    all: "/data/solutions?sortBy=_createdOn%20desc",
    byId: "/data/solutions/",
    create: "/data/solutions",
    likes: "/data/likes",
    allLikes: (solutionId) => `/data/likes?where=solutionId%3D%22${solutionId}%22&distinct=_ownerId&count`,
    isLiked: (solutionId, userId) => `/data/likes?where=solutionId%3D%22${solutionId}%22%20and%20_ownerId%3D%22${userId}%22&count`

}

async function getAllSolutions() {

    return get(host + api.all)
}

function getSolutionById(id) {
    return get(host + api.byId + id)
}
function deleteSolutionById(id) {
    return del(host + api.byId + id)
}
function createSolution(data) {
    return post(host + api.create, data)
}
function editSolutionById(id, data) {
    return put(host + api.byId + id, data)
}
function searchByText(text) {
    return get(`${host}/data/shows?where=title%20LIKE%20%22${text}%22`)
}
function addLikes(data) {
    return post(host + api.likes, data)
}
function getAllLikes(id) {
    return get(host + api.allLikes(id))
}
function isUserLiked(solutionId, userId) {
    return get(host + api.isLiked(solutionId, userId))
}
export {
    getAllSolutions,
    getSolutionById,
    createSolution,
    deleteSolutionById,
    editSolutionById,
    searchByText,
    addLikes,
    getAllLikes,
    isUserLiked

}