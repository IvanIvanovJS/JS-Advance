document.querySelector("form").addEventListener("submit", loginOn);

async function loginOn(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")
    const password = formData.get("password")
    try {
        if (!email || !password) {
            return;
        }

        const url = "http://localhost:3030/users/login"
        const options = {
            method: "post",
            headers: { "Content-Type": "aplication/json" },
            body: JSON.stringify({ email, password })
        }
        console.log("test");

        const response = await fetch(url, options)
        console.log(response);
        if (response.ok !== true) {
            const err = await response.json();
            throw err;
        }
        console.log("test1");


        const data = await response.json();
        const userData = {
            id: data._id,
            accessToken: data.accessToken
        }
        sessionStorage.setItem("userData", JSON.stringify(userData))
        location = "/RemoteDataAndAuthentications/index.html"
    } catch (error) {
        alert(error.message)
    }

}