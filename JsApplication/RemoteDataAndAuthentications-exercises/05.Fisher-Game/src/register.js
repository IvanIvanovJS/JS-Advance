function register() {
    document.querySelector('form').addEventListener("submit", onSubmit)
    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get("email");
        const password = formData.get("password");
        const rePass = formData.get("rePass");



        try {
            if (!email || !password || password !== rePass) {
                throw new Error("All fields requierd")
            }
            const URL = "http://localhost:3030/users/register";
            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            }

            const res = await fetch(URL, options)
            const data = await res.json()

            if (res.ok !== true) {
                throw data
            }
            const userData = {
                id: data._id,
                email,
                accessToken: data.accessToken
            }
            sessionStorage.setItem("userData", JSON.stringify(userData))
            window.location = "index.html"
        } catch (error) {
            alert(error.message)
        }
    }
}
register()