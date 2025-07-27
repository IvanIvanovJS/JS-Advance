
import { getUserData } from "../utils/userdata.js"

const endPoints = {
    login: "http://localhost:3030/users/login",
    register: "http://localhost:3030/users/register",
    logout: "http://localhost:3030/users/logout",
}

async function sendRequest(url, method, headers, body) {
    const options = {
        method,
        headers,
        body: JSON.stringify(body)
    }
    try {
        const response = await fetch(url, options)


        if (response.status === 200) {
            const data = await response.json()
            return data
        }

        if (response.ok !== true) {
            const err = await response.json()
            throw err
        }
    } catch (error) {
        alert(error.message)

    }

}
async function register(email, password) {
    return await sendRequest(endPoints.register, "POST", { "Content-Type": "application/json" }, { email, password })
}
async function login(email, password) {
    return await sendRequest(endPoints.login, "POST", { "Content-Type": "application/json" }, { email, password })
}
async function logout() {
    return await sendRequest(endPoints.logout, "GET", { "X-Authorization": getUserData().accessToken })
}

export {
    sendRequest,
    register,
    login,
    logout
}