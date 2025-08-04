function formSubmitHandler(e) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData)
    return data
}

export {
    formSubmitHandler
}