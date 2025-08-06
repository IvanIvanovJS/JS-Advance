

function getUserData() {
    return JSON.parse(sessionStorage.getItem("userData"))
}

function setUserData(data) {
    const userData = {
        id: data._id,
        accessToken: data.accessToken
    }
    sessionStorage.setItem("userData", JSON.stringify(userData))
}
function clearUserData() {
    sessionStorage.removeItem("userData")
}

export {
    getUserData,
    setUserData,
    clearUserData
}