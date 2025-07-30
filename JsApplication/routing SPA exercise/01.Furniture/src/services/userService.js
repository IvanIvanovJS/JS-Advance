
import { api } from "../utility/requester.js"
import { userUtility } from "../utility/userUtils.js"
const endpoints = {
    register: "http://localhost:3030/users/register",
    login: "http://localhost:3030/users/login",
    logout: "http://localhost:3030/users/logout"
}

async function login(data) {
    const userData = await api.post(endpoints.login, data)
    userUtility.setUserData(userData)

}
async function register(data) {
    const userData = await api.post(endpoints.register, data)
    userUtility.setUserData(userData)
}
async function logout() {
    await api.get(endpoints.logout)
    userUtility.deleteUserData()
}

export {
    login,
    register,
    logout
}
