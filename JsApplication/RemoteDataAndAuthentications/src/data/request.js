import { getUserData, updateNav } from "../utils.js";

export const URLs = {
    recipes: "http://localhost:3030/data/recipes",
    login: "http://localhost:3030/users/login",
    register: 'http://localhost:3030/users/register',
    logout: 'http://localhost:3030/users/logout'
}

export async function request(method, url, headers, body) {
    const options = {
        method,
        headers,
        body: JSON.stringify(body)
    }
    const response = await fetch(url, options)
    if (response.ok !== true) {
        const err = await response.json();
        throw err;
    }

    if (response.status == 200) {
        const data = await response.json()
        return data
    }


}
export async function login(email, password) {

    return await request("POST", URLs.login, { "Content-Type": "application/json" }, { email, password })
}
export async function register(email, password) {
    return await request("POST", URLs.register, { "Content-Type": "application/json" }, { email, password })
}
export async function logout() {
    await request("GET", URLs.logout, { "X-Authorization": getUserData().accessToken })
}

