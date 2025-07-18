function attachEvents() {
    const URL = "http://localhost:3030/jsonstore/messenger"
    const sendBtnRef = document.getElementById("submit")
    sendBtnRef.addEventListener("click", onSubmit)
    const authorRef = document.querySelector("input[name='author']")
    const contentRef = document.querySelector("input[name='content']")
    const textAreaRef = document.getElementById("messages");
    document.getElementById("refresh").addEventListener("click", onRefresh)
    async function onSubmit() {
        const author = authorRef.value;
        const content = contentRef.value;
        authorRef.value = ""
        contentRef.value = ""
        if (!author || !content) {
            return
        }
        const options = {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ author, content })
        }
        await fetch(URL, options)
        onRefresh()
    }
    async function onRefresh() {
        const response = await fetch(URL);
        const data = await response.json()
        const dataInfo = Object.values(data).map(el => `${el.author}: ${el.content}`)
        textAreaRef.value = dataInfo.join('\n')

    }
}

attachEvents();