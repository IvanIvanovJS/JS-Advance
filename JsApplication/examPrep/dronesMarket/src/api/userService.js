import { post, get } from "./requester.js";
const api = {
    register: "http://localhost:3030/users/register",
    login: "http://localhost:3030/users/login",
    logout: "http://localhost:3030/users/logout"
}
function register(data) {
    return post(api.register, data)
}
function login(data) {
    return post(api.login, data)
}
function logout() {
    return get(api.logout)
}


export {
    register,
    login,
    logout
}