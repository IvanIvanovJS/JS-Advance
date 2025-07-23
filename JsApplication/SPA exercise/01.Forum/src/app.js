const form = document.querySelector("form");
const main = document.querySelector("main")
const homeBtn = document.querySelector("nav > ul > li > a")
homeBtn.addEventListener("click", onHome)
const container = document.querySelector(".container")

form.querySelector(".public").addEventListener("click", onPost)
form.querySelector(".cancel").addEventListener("click", onCancel)
const url = "http://localhost:3030/jsonstore/collections/myboard/posts"
const commentURL = "http://localhost:3030/jsonstore/collections/myboard/comments"
let time = ""
getAllPosts()
async function onPost(e) {

    e.preventDefault()
    const formData = new FormData(form)
    const { topicName, username, postText } = Object.fromEntries(formData)

    time = new Date()
    if (!topicName || !username || !postText) {
        return;
    }
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: topicName, username, content: postText, time: time.toISOString() })
    }
    await fetch(url, options)


    form.querySelectorAll("input").forEach(input => input.value = "")
    form.querySelector("textarea").value = ""

    getAllPosts()

}

function onHome(e) {
    e.preventDefault();
    getAllPosts()

}
function onCancel(e) {
    e.preventDefault()
    form.querySelectorAll("input").forEach(input => input.value = "")
    form.querySelector("textarea").value = ""
}
async function getAllPosts() {
    const response = await fetch(url)
    const data = await response.json()
    const postsRecords = Object.values(data)
    main.replaceChildren(form.parentElement)

    postsRecords.forEach(post => {

        const div = document.createElement("div");
        div.classList.add("topic-container")
        div.innerHTML = `<div class="topic-name-wrapper">
        <div class="topic-name" data-id="${post._id}">
            <a href="#" class="normal">
                <h2>${post.title}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${post.time}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${post.username}</span></p>
                    </div>
                </div>


            </div>
        </div>`
        main.appendChild(div)

    })

    container.addEventListener("click", (e) => {
        const anchor = e.target.closest("a.normal");
        if (anchor) {
            e.preventDefault();

            const topicId = anchor.closest(".topic-name").dataset.id;
            getTopic(e, topicId);
        }
    });

    container.replaceChildren(main)
}

async function getTopic(e, topicId) {
    e.preventDefault()
    const data = await (await fetch(url + `/${topicId}`)).json()

    const div = document.createElement("div")
    div.className = "topic-name-wrapper"
    div.innerHTML = ` 
        <!-- theme content  -->
        <div class="theme-content">
            <!-- theme-title  -->
            <div class="theme-title">
                <div class="theme-name-wrapper">
                    <div class="theme-name">
                        <h2>${data.title}</h2>

                    </div>

                </div>
            </div>
            <div class="comment">
            <div class="header">
                <img src="./static/profile.png" alt="avatar">
                 <p><span>${data.username}</span> posted on <time>${data.time}</time></p>

                <p class="post-content">${data.content}</p>
                    </div>
                    </div>
            <div class="answer-comment">
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
            </div>
            </div>
            `

    container.replaceChildren(div)


    getCommentData(topicId)
    div.querySelector("form").addEventListener("submit", (e) => onComment(e, topicId))

}
async function onComment(e, topicId) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const { postText, username } = Object.fromEntries(formData);

    if (!postText || !username) {
        return
    }
    time = new Date();
    const commentOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            text: postText,
            username,
            postId: topicId,
            time
        })
    }

    const postData = await (await fetch(commentURL, commentOptions)).json()

    getCommentData(topicId)


}
async function getCommentData(topicId) {
    const commentsInfo = await (await fetch(commentURL)).json()
    const commentRef = document.querySelector(".comment")
    const header = commentRef.querySelector(".header")
    commentRef.replaceChildren(header);
    Object.values(commentsInfo).forEach(comment => {

        if (comment.postId == topicId) {
            const commentDiv = document.createElement("div")
            commentDiv.id = "user-comment"
            commentDiv.innerHTML = `<div class="topic-name-wrapper">
            <div class="topic-name">
                <p><strong>${comment.username}</strong> commented on <time>${comment.time}</time></p>
                <div class="post-content">
                    <p>${comment.text}</p>
                </div>
            </div>
        </div>`
            commentRef.appendChild(commentDiv)
        }
    })


}
