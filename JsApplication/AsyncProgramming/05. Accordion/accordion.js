async function solution() {
    const mainSectionRef = document.getElementById("main")
    const titlesAPI = await fetch("http://localhost:3030/jsonstore/advanced/articles/list");
    const dataTitles = await titlesAPI.json()

    for (const element of dataTitles) {
        const textAPI = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${element._id}`)
        const textData = await textAPI.json();
        mainSectionRef.innerHTML += `<div class="accordion">
            <div class="head">
                <span>${element.title}</span>
                <button class="button" id="${element._id}">More</button>
            </div>
            <div class="extra">
                <p>${textData.content}</p>
            </div>
        </div>`
    }
    dataTitles.forEach((element, index) => {
        const btnRef = document.getElementById(`${element._id}`)

        const paragraphs = document.querySelectorAll("p")
        paragraphs.forEach((paragraph, indexP) => {
            if (index === indexP) {
                btnRef.addEventListener("click", () => {
                    if (btnRef.textContent == "More") {
                        btnRef.textContent = "Less";
                        paragraph.parentElement.style.display = "block"
                    } else {
                        btnRef.textContent = "More"
                        paragraph.parentElement.style.display = "none"
                    }
                })
            }

        });
    });




}
solution()