

window.addEventListener("load", solve);

function solve() {
    let ticketsCountRef = document.getElementById("num-tickets")
    //must seatingPrefRef.value == "General" || "VIP"
    let seatingPrefRef = document.getElementById("seating-preference")
    let fullNameRef = document.getElementById("full-name")
    let emailRef = document.getElementById("email")
    let phoneNumberRef = document.getElementById("phone-number")
    let ticketPreviewRef = document.getElementById("ticket-preview")
    let ticketPurchaseRef = document.getElementById("ticket-purchase")
    let bottomContentRef = document.getElementsByClassName("bottom-content")[0]


    let btnRef = document.getElementById("purchase-btn")
    btnRef.addEventListener("click", onPurchase)
    function onPurchase() {

        if (ticketsCountRef.value !== "" && Number(ticketsCountRef.value) > 0 && Number.isInteger(Number(ticketsCountRef.value)) && (seatingPrefRef.value == "General" || seatingPrefRef.value == "VIP") &&
            fullNameRef.value !== '' && emailRef.value !== "" && phoneNumberRef.value !== '') {
            let ticketCount = ticketsCountRef.value
            let seatingPref = seatingPrefRef.value
            let fullName = fullNameRef.value
            let email = emailRef.value
            let phoneNum = phoneNumberRef.value

            let createLi = document.createElement("li");
            createLi.className = "ticket-purchase"
            ticketPreviewRef.appendChild(createLi)
            let article = createArticle(ticketCount, seatingPref, fullName, email, phoneNum)
            createLi.appendChild(article)
            let buttons = createButton("Edit", "Next")
            createLi.appendChild(buttons)
            let editBtnRef = document.getElementsByClassName("edit-btn")[0]
            let nextBtnRef = document.getElementsByClassName("next-btn")[0]
            ticketsCountRef.value = ""
            seatingPrefRef.selectedIndex = 0;
            fullNameRef.value = ""
            emailRef.value = ""
            phoneNumberRef.value = ""
            btnRef.disabled = true;
            editBtnRef.addEventListener("click", () => {
                ticketsCountRef.value = ticketCount;
                seatingPrefRef.value = seatingPref;
                fullNameRef.value = fullName;
                emailRef.value = email;
                phoneNumberRef.value = phoneNum;
                createLi.remove()
                btnRef.disabled = false;

            })
            nextBtnRef.addEventListener("click", () => {
                createLi.removeChild(buttons)
                let buyBtn = document.createElement("button")
                buyBtn.className = "buy-btn"
                buyBtn.textContent = "Buy"
                createLi.remove()
                createLi.className = "ticket-purchase"
                console.log(ticketPurchaseRef);
                console.log(createLi);
                ticketPurchaseRef.appendChild(createLi)
                let article = createLi.children[0]
                article.appendChild(buyBtn)
                buyBtn.addEventListener("click", () => {
                    createLi.remove()
                    let createH2 = document.createElement("h2")
                    createH2.textContent = "Thank you for your purchase!"
                    bottomContentRef.appendChild(createH2)
                    let createBackBtn = document.createElement("button")
                    createBackBtn.className = "back-btn"
                    createBackBtn.textContent = "Back"
                    bottomContentRef.appendChild(createBackBtn)
                    createBackBtn.addEventListener("click", () => {
                        createH2.remove()
                        createBackBtn.remove()
                        ticketsCountRef.value = ""
                        seatingPrefRef.selectedIndex = 0;
                        fullNameRef.value = ""
                        emailRef.value = ""
                        phoneNumberRef.value = ""
                        btnRef.disabled = false;
                    })
                })
            })
        }
    }
    function createArticle(count, preference, name, email, phone) {
        let createArt = document.createElement("article");
        let ticketCount = createParagraph(`Count: ${count}`)
        let pref = createParagraph(`Preference: ${preference}`)
        let to = createParagraph(`To: ${name}`)
        let mail = createParagraph(`Email: ${email}`)
        let phoneNum = createParagraph(`Phone Number: ${phone}`)

        createArt.appendChild(ticketCount)
        createArt.appendChild(pref)
        createArt.appendChild(to)
        createArt.appendChild(mail)
        createArt.appendChild(phoneNum)
        return createArt

    }
    function createParagraph(value) {
        let paragraph = document.createElement("p")
        paragraph.textContent = value
        return paragraph;
    }
    function createButton(name1, name2) {
        let divCreate = document.createElement("div")
        divCreate.className = "btn-container"
        let createBtn = document.createElement("button")
        createBtn.className = "edit-btn"
        createBtn.textContent = name1;

        divCreate.appendChild(createBtn)
        createBtn = document.createElement("button")
        createBtn.className = "next-btn"
        createBtn.textContent = name2;
        divCreate.appendChild(createBtn)
        return divCreate

    }

}
