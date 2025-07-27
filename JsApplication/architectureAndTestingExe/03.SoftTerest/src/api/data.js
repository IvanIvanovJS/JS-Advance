import { getUserData } from "../utils/userdata.js"
import { sendRequest } from "./requests.js"

const endPoints = {
    dashboard: "http://localhost:3030/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc",
    create: "http://localhost:3030/data/ideas",
    details: "http://localhost:3030/data/ideas",
    delete: "http://localhost:3030/data/ideas"
}
async function getAllIdeas() {
    return await sendRequest(endPoints.dashboard, "GET")



}
async function create(title, description, img) {
    return await sendRequest(endPoints.create, "POST", { "Content-Type": "application/json", "X-Authorization": getUserData().accessToken }, { title, description, img })

}
async function details(id) {
    return await sendRequest(endPoints.details + `/${id}`, "GET")
}
async function delIdea(id) {
    return await sendRequest(endPoints.delete + `/${id}`, "DELETE", { "X-Authorization": getUserData().accessToken })
}

export {
    getAllIdeas,
    create,
    details,
    delIdea
}