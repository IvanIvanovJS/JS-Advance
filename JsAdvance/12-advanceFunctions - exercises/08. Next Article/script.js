function getArticleGenerator(articles) {
    let data = articles;
    let divRef = document.getElementById("content")

    return function () {
        let element = data.shift();
        if (element !== undefined) {
            let article = document.createElement("article");
            article.textContent = element
            return divRef.appendChild(article)
        }

    }
}
