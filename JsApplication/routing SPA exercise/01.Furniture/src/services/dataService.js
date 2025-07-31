/*
•	Create Furniture (POST): http://localhost:3030/data/catalog
•	All Furniture (GET): http://localhost:3030/data/catalog
•	Furniture Details (GET): http://localhost:3030/data/catalog/:id
•	Update Furniture (PUT): http://localhost:3030/data/catalog/:id
•	Delete Furniture (DELETE):  http://localhost:3030/data/catalog/:id
•	My Furniture (GET): http://localhost:3030/data/catalog?where=_ownerId%3D%22{userId}%22
 */

import { api } from "../utility/requester.js"

const url = {
    catalog: "http://localhost:3030/data/catalog",
    details: "http://localhost:3030/data/catalog/",
    myFurniture: myFurnitureUrl
}
function myFurnitureUrl(userId) {
    return `http://localhost:3030/data/catalog?where=_ownerId%3D%22${userId}%22`
}
async function getAllFurniture() {
    const data = await api.get(url.catalog)
    return data
}
async function getFurnitureById(id) {
    return await api.get(url.details + id)
}
async function createFurnitureByID(data) {
    return await api.post(url.catalog, data)
}
async function editFurnitureByID(id, data) {
    return await api.put(url.details + id, data)
}
async function deleteById(id) {
    return await api.del(url.details + id)
}
async function getMyFurniture(userId) {
    return await api.get(url.myFurniture(userId))
}


export {
    getAllFurniture,
    getFurnitureById,
    createFurnitureByID,
    editFurnitureByID,
    deleteById,
    getMyFurniture
}