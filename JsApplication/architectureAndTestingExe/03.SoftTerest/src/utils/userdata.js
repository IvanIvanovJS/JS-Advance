function getUserData() {
    return JSON.parse(localStorage.getItem("userData"))
}

export {
    getUserData
}