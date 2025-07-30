
function setUserData(data) {
    const userData = {
        id: data._id,
        accessToken: data.accessToken
    }

    sessionStorage.setItem("userData", JSON.stringify(userData))
}

function getUserData() {
    return JSON.parse(sessionStorage.getItem("userData"))
}

function deleteUserData() {
    sessionStorage.removeItem("userData")
}

export const userUtility = {
    setUserData,
    getUserData,
    deleteUserData
}