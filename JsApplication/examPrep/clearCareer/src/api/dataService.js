
import { del, get, post, put } from "./requester.js"


const host = "http://localhost:3030"
const api = {
    all: "/data/offers?sortBy=_createdOn%20desc",
    byId: "/data/offers/",
    create: "/data/offers",
    apply: "/data/applications",
    offerCounts: (offerId) => `/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`,
    isApplyed: (offerId, userId) => `/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`

}

async function getAllOffers() {

    return get(host + api.all)
}

function getOfferById(id) {
    return get(host + api.byId + id)
}
function deleteById(id) {
    return del(host + api.byId + id)
}
function createOffer(data) {
    return post(host + api.create, data)
}
function editSolutionById(id, data) {
    return put(host + api.byId + id, data)
}
function searchByText(text) {
    return get(`${host}/data/shows?where=title%20LIKE%20%22${text}%22`)
}
function applyForJob(data) {
    return post(host + api.apply, data)
}
function countAllOffers(id) {
    return get(host + api.offerCounts(id))
}
function isUserApplyed(offerId, userId) {
    return get(host + api.isApplyed(offerId, userId))
}
export {
    getAllOffers,
    getOfferById,
    createOffer,
    deleteById,
    editSolutionById,
    searchByText,
    applyForJob,
    countAllOffers,
    isUserApplyed
}