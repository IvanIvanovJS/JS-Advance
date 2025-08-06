import { getUserData } from "../service/userData.js"
async function requester(method, url, data) {
    try {
        const options = {
            method,
            headers: {}
        }

        if (data) {
            options.headers["Content-Type"] = "application/json"
            options["body"] = JSON.stringify(data)
        }
        const userData = getUserData()
        if (userData) {
            options.headers["X-authorization"] = userData.accessToken
        }
        const response = await fetch(url, options)

        if (!response.ok) {
            throw await response.json()
        }
        if (response.status == 204) {
            return response
        }
        return await response.json()

    } catch (error) {
        throw error
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

export {
    get,
    post,
    put,
    del
}