const userData = sessionStorage.getItem("userData")

if (userData) {
    document.getElementById("user").style.display = "inline-block"
} else {
    document.getElementById("guest").style.display = "inline-block"
}
loadRecipes()
async function loadRecipes() {
    const recipesUrl = await fetch("http://localhost:3030/data/recipes")
    const recipesData = await recipesUrl.json()


    showRecipes(recipesData)
}

function showRecipes(data) {
    const main = document.querySelector("main")
    for (const recipe of data) {
        const element = createRecipesPreview(recipe)
        main.appendChild(element)
    }
}

function createRecipesPreview(data) {

    const element = document.createElement('article')
    element.className = "preview"
    element.innerHTML = `<div class="title">
                             <h2>${data.name}</h2>
                        </div>
                        <div class="small">
                            <img src = "${data.img}">
                        </div>`

    element.addEventListener("click", onClick)
    function onClick() {
        element.removeEventListener("click", onClick)
        element.innerHTML = `
        <h2>${data.name}</h2>
        <div class="band">
            <div class="thumb">
                <img src = "${data.img}">
            </div>
            <div class="ingredients">
                <h3>Ingredients:</h3>
                <ul>
                    ${data.ingredients.map(x => `<li>${x}</li>`).join(``)}
                </ul>
            </div>
         </div>
     <div class="description">
        <h3>Preparation:</h3>
       ${data.steps.map(s => `<p>${s}</p>`).join(``)}
       </div>`
    }
    return element
}


