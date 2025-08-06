
import { del, get, post, put } from "./requester.js"



const api = {
    all: "http://localhost:3030/data/shows?sortBy=_createdOn%20desc",
    byId: "http://localhost:3030/data/shows/",
    create: "http://localhost:3030/data/shows",


}

async function getAllMovies() {

    return get(api.all)
}

function getMovieById(id) {
    return get(api.byId + id)
}
function deleteMovieById(id) {
    return del(api.byId + id)
}
function createMovie(data) {
    return post(api.create, data)
}
function editMovieById(id, data) {
    return put(api.byId + id, data)
}
function searchByText(text) {
    return get(`http://localhost:3030/data/shows?where=title%20LIKE%20%22${text}%22`)
}


export {
    getAllMovies,
    getMovieById,
    createMovie,
    deleteMovieById,
    editMovieById,
    searchByText

}