async function attachEvents() {
    const postsAPI = await fetch("http://localhost:3030/jsonstore/blog/posts");
    const postsData = await postsAPI.json();
    const selectIDRef = document.getElementById("posts");
    const viewBtnRef = document.getElementById("btnViewPost")
    const loadBtnRef = document.getElementById("btnLoadPosts")
    const postsInfo = Object.values(postsData);
    const postTitleRef = document.getElementById("post-title")
    const postBodyRef = document.getElementById("post-body")
    const commentsBodyRef = document.getElementById("post-comments")
    const commentsAPI = await fetch("http://localhost:3030/jsonstore/blog/comments")
    const commentsData = await commentsAPI.json();
    const commentsInfo = Object.values(commentsData);



    loadBtnRef.addEventListener("click", () => {
        postsInfo.forEach(element => {
            selectIDRef.appendChild(optionCreate(element.id, element.title))
        })
    })

    viewBtnRef.addEventListener("click", () => {
        commentsBodyRef.replaceChildren()
        const postInfo = postsInfo.find(x => x.id === selectIDRef.value)
        postTitleRef.textContent = postInfo.title
        postBodyRef.textContent = postInfo.body
        const commentInfo = commentsInfo.filter(x => x.postId === selectIDRef.value)

        commentInfo.forEach(element => {
            const liCreate = document.createElement("li")
            liCreate.id = element.id;
            liCreate.textContent = element.text;
            commentsBodyRef.appendChild(liCreate)
        })


    })

}
function optionCreate(value, text) {
    let option = document.createElement("option");
    option.value = value;
    option.textContent = text;
    return option;
}
attachEvents();