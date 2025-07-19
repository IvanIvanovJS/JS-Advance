function login() {
    const URL = "http://localhost:3030/users/login"
    document.querySelector("form").addEventListener("submit", onSubmit)
    async function onSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target);
        const email = formData.get("email")
        const password = formData.get("password")
        try {
            if (!email || !password) {
                throw new Error("All fields are requierd")
            }

            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            }
            const response = await fetch(URL, options)


            const data = await response.json()

            if (response.ok !== true) {
                throw data
            }
            const userData = {
                email,
                id: data._id,
                accessToken: data.accessToken
            }
            sessionStorage.setItem("userData", JSON.stringify(userData))
            window.location = "index.html"
        } catch (error) {
            alert(error.message)
        }





    }
}
login()

