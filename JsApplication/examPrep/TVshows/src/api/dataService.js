
import { del, get, post, put } from "./requester.js"


const host = "http://localhost:3030"
const api = {
    all: "/data/shows?sortBy=_createdOn%20desc",
    byId: "/data/shows/",
    create: "/data/shows",


}

async function getAllMovies() {

    return get(host + api.all)
}

function getMovieById(id) {
    return get(host + api.byId + id)
}
function deleteMovieById(id) {
    return del(host + api.byId + id)
}
function createMovie(data) {
    return post(host + api.create, data)
}
function editMovieById(id, data) {
    return put(host + api.byId + id, data)
}
function searchByText(text) {
    return get(`${host}/data/shows?where=title%20LIKE%20%22${text}%22`)
}


export {
    getAllMovies,
    getMovieById,
    createMovie,
    deleteMovieById,
    editMovieById,
    searchByText

}