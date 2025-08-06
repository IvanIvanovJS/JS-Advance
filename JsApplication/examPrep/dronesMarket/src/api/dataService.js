
import { getUserData } from "../service/userData.js"
import { del, get, post, put } from "./requester.js"



const api = {
    all: "http://localhost:3030/data/drones?sortBy=_createdOn%20desc",
    byId: "http://localhost:3030/data/drones/",
    create: "http://localhost:3030/data/drones"

}

async function getAllDrones() {

    return get(api.all)
}

function getDroneById(id) {
    return get(api.byId + id)
}
function deleteDroneById(id) {
    return del(api.byId + id)
}
function createDrone(data) {
    return post(api.create, data)
}
function editDroneById(id, data) {
    return put(api.byId + id, data)
}



export {
    getAllDrones,
    getDroneById,
    createDrone,
    deleteDroneById,
    editDroneById

}