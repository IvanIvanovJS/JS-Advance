import { URLs, updateNav, getUserData, showView } from "./utils.js";

export function showDeleteView(details) {
    deleteRequest()
    async function deleteRequest() {
        try {
            const options = {
                method: "DELETE",
                headers: { "X-Authorization": getUserData().accessToken }
            }
            const response = await fetch(URLs.recipes + `/${details._id}`, options)
            const data = await response.json()
            if (response.ok !== true) {
                throw data
            }

            const article = document.createElement("article")
            article.classList.add("preview")
            const h2 = document.createElement("h2")
            h2.textContent = "Recipe Deleted"
            article.appendChild(h2)
            showView(article)
            updateNav()

        } catch (error) {
            alert(error.message)
        }

    }
}