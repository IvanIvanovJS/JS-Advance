const form = document.querySelector("form");
const mian = document.querySelector("main")

form.querySelector(".public").addEventListener("click", onPost)
form.querySelector(".cancel").addEventListener("click", onCancel)
const url = "http://localhost:3030/jsonstore/collections/myboard/posts"


async function onPost(e) {

    e.preventDefault()
    const formData = new FormData(form)
    const { topicName, username, postText } = Object.fromEntries(formData)
    console.log(topicName);

    if (!topicName || !username || !postText) {
        return;
    }
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: topicName, username, content: postText })
    }
    const response = await fetch(url, options);
    const data = await response.json()
    const time = new Date()

    form.querySelectorAll("input").forEach(input => input.value = "")
    form.querySelector("textarea").value = ""

    const postData = {
        data,
        time
    }

    const div = document.createElement("div");
    div.classList.add("topic-container")
    div.innerHTML = `<div class="topic-name-wrapper">
        <div class="topic-name">
            <a href="/01.Forum/index.html " class="normal">
                <h2>${data.title}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${time.toISOString()}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${data.username}</span></p>
                    </div>
                </div>


            </div>
        </div>`
    mian.appendChild(div)
    document.querySelector("a.normal").addEventListener("click", onClick)
    function onClick(e) {
        e.preventDefault()
        div.className = "comment"
        div.innerHTML = `<div class="header">
        <img src="./static/profile.png" alt="avatar">
        <p><span>${data.username}</span> posted on <time>${time.toISOString()}</time></p>

        <p class="post-content">${data.content}</p>
        
    </div>`
        const commentSectionRef = document.createElement("div")
        commentSectionRef.classList.add("answer-comment")
        commentSectionRef.innerHTML = ` 
                <p><span>currentUser</span> comment:</p>
                <div class="answer">
                    <form>
                        <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                        <div>
                            <label for="username">Username <span class="red">*</span></label>
                            <input type="text" name="username" id="username">
                        </div>
                        <button>Post</button>
                    </form>
                </div>
            `
        mian.appendChild(commentSectionRef)
        const commentSection = document.querySelector("div.answer")
        const commentForm = commentSection.querySelector("form")
        commentForm.addEventListener("submit", onSumbit)
        async function onSumbit(e) {
            e.preventDefault();
            const commentData = new FormData(e.target)
            const { postText, username } = Object.fromEntries(commentData)

            const commentURL = "http://localhost:3030/jsonstore/collections/myboard/comments"
            const commnetOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    text: postText,
                    username,
                    postId: data._id
                })
            }
            const res = await fetch(commentURL, commnetOptions)
            const resData = await res.json();


            const commDiv = document.createElement("div")
            commDiv.id = "user-comment"
            commDiv.innerHTML = `<div class="topic-name-wrapper">
            <div class="topic-name">
                <p><strong>${resData.username}</strong> commented on <time>${time.toISOString()}</time></p>
                <div class="post-content">
                    <p>${resData.text}</p>
                </div>
            </div>
        </div>`
            div.appendChild(commDiv)
        }
    }

}


function onCancel(e) {
    e.preventDefault()
    form.querySelectorAll("input").forEach(input => input.value = "")
    form.querySelector("textarea").value = ""
}