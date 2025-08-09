
import { getUserData } from "../service/userData.js"
import { del, get, post, put } from "./requester.js"



const api = {
    all: "http://localhost:3030/data/mindfultips?sortBy=_createdOn%20desc",
    byId: "http://localhost:3030/data/mindfultips/",
    create: "http://localhost:3030/data/mindfultips"

}

async function getAllTips() {

    return get(api.all)
}

function getTipById(id) {
    return get(api.byId + id)
}
function deleteTipById(id) {
    return del(api.byId + id)
}
function createTip(data) {
    return post(api.create, data)
}
function editTipById(id, data) {
    return put(api.byId + id, data)
}



export {
    getAllTips,
    getTipById,
    createTip,
    deleteTipById,
    editTipById

}