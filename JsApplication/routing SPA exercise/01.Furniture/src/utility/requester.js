import { userUtility } from "./userUtils.js"

async function requester(method, url, data) {
    const options = {
        method,
        headers: {}
    }
    if (data) {
        options.headers["Content-Type"] = 'application/json'
        options["body"] = JSON.stringify(data)
    }
    const userData = userUtility.getUserData()

    if (userData) {
        options.headers["X-Authorization"] = userData.accessToken
    }

    try {
        const response = await fetch(url, options)

        if (response.ok !== true) {
            const err = await response.json()
            throw err
        }
        if (response.status == 204) {
            return response
        }
        return response.json()

    } catch (error) {
        alert(error.message)
    }
}

function get(url) {
    return requester("GET", url)
}

function post(url, data) {
    return requester("POST", url, data)
}
function put(url, data) {
    return requester("PUT", url, data)
}
function del(url) {
    return requester("DELETE", url)
}

export const api = {
    get,
    post,
    put,
    del
}