const userData = JSON.parse(sessionStorage.getItem("userData"))

if (!userData) {
    location = "/RemoteDataAndAuthentications/login.html"
}

document.querySelector("form").addEventListener("submit", onCreate);

async function onCreate(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")
    const img = formData.get("img")
    const ingredients = formData.get("ingredients").trim().split('\n')
    const steps = formData.get("steps").trim().split("\n")
    console.log(ingredients);


    try {
        if (!name || !img || !ingredients || !steps) {
            throw new Error("All fields must be fulfilled")
        }
        const url = "http://localhost:3030/data/recipes"
        const options = {
            method: "post",
            headers: { "Content-type": "aplication/json", "X-Authorization": userData.accessToken },
            body: JSON.stringify({ name, img, ingredients, steps })
        }

        const response = await fetch(url, options)
        if (response.ok !== true) {
            const err = await response.json()
            return err;
        }

        location = "/RemoteDataAndAuthentications/index.html"
    } catch (error) {
        alert(error.message)
    }


}