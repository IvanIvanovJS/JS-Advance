import { post, get } from "./requester.js";
const host = "http://localhost:3030"
const api = {
    register: "/users/register",
    login: "/users/login",
    logout: "/users/logout"
}
function register(data) {
    return post(host + api.register, data)
}
function login(data) {
    return post(host + api.login, data)
}
function logout() {
    return get(host + api.logout)
}


export {
    register,
    login,
    logout
}