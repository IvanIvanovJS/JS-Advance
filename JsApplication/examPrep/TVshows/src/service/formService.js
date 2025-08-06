function createSubmitHandler(callback) {
    return function (e) {
        e.preventDefault()

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData)
        return callback(data, e.currentTarget)
    }
}

export {
    createSubmitHandler
}