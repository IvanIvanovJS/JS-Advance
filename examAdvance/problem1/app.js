window.addEventListener('load', solve);

function solve() {
    document.querySelector("form").addEventListener("submit", onSubmit)
    function onSubmit(event) {
        event.preventDefault();
    }

    let pickUpRef = document.getElementById("pick-up-location")
    let dropOfRef = document.getElementById("drop-off-location")
    let numOfPassengerRef = document.getElementById("number-of-passengers")
    let dateTimeRef = document.getElementById("date-time")
    let taxiTypeRef = document.getElementById("taxi-type")
    let orderBtnRef = document.getElementById("order-btn")
    let orderInfoRef = document.getElementsByClassName("order-info-list")[0]
    let confirmInfoRef = document.getElementsByClassName("confirm-order-list")[0]
    let statusRef = document.getElementById("status")

    orderBtnRef.addEventListener("click", () => {
        let pickFrom = pickUpRef.value;
        let dropOFf = dropOfRef.value;
        let passengersCount = numOfPassengerRef.value;
        let orderTime = dateTimeRef.value;
        let taxiType = taxiTypeRef.value
        if (pickUpRef.value !== "" && dropOfRef.value !== "" && numOfPassengerRef.value !== ""
            && dateTimeRef.value !== "" && taxiTypeRef.value !== "") {


            let createLi = document.createElement("li")
            createLi.className = "order-content"
            let createArticle = document.createElement("article")
            let createH3 = document.createElement("h3")
            createH3.textContent = `Pick From: ${pickUpRef.value}`
            let secondH3 = document.createElement("h3")
            secondH3.textContent = `Drop-Off: ${dropOfRef.value}`
            let passengers = createPara(`Passengers: ${numOfPassengerRef.value}`)
            let time = createPara(`Time: ${dateTimeRef.value}`)
            let type = createPara(`Type: ${taxiTypeRef.value}`)
            let createDiv = document.createElement("div")
            createDiv.className = "btn-wrapper"
            let editBtn = document.createElement("button")
            editBtn.className = "edit-btn"
            editBtn.textContent = "Edit"
            let continueBtn = document.createElement("button")
            continueBtn.className = "continue-btn"
            continueBtn.textContent = "Continue"
            orderInfoRef.appendChild(createLi)
            createLi.appendChild(createArticle)
            createLi.appendChild(createDiv)
            createDiv.appendChild(editBtn)
            createDiv.appendChild(continueBtn)
            createArticle.appendChild(createH3)
            createArticle.appendChild(secondH3)
            createArticle.appendChild(passengers)
            createArticle.appendChild(time)
            createArticle.appendChild(type)
            pickUpRef.value = "";
            dropOfRef.value = "";
            numOfPassengerRef.value = ""
            dateTimeRef.value = "";
            taxiTypeRef.value = ""
            orderBtnRef.disabled = true;
            editBtn.addEventListener("click", () => {
                pickUpRef.value = pickFrom
                dropOfRef.value = dropOFf
                numOfPassengerRef.value = passengersCount
                dateTimeRef.value = orderTime
                taxiTypeRef.value = taxiType
                orderBtnRef.disabled = false;
                createLi.remove()
            })
            let cancelBtn = document.createElement("button")
            let confirmlBtn = document.createElement("button")
            continueBtn.addEventListener("click", () => {
                createLi.remove();
                confirmInfoRef.appendChild(createLi)
                editBtn.remove();
                continueBtn.remove()
                cancelBtn.textContent = "Cancel"
                cancelBtn.className = "cancel-btn"
                confirmlBtn.textContent = "Confirm"
                confirmlBtn.className = "confirm-btn"
                createDiv.appendChild(cancelBtn)
                createDiv.appendChild(confirmlBtn)
            })
            cancelBtn.addEventListener("click", () => {
                createLi.remove();
                statusRef.textContent = "Taxi request was not completed."
                statusRef.className = "taxi-not-complete"
                orderBtnRef.disabled = false;
            })
            confirmlBtn.addEventListener("click", () => {
                createLi.remove();
                statusRef.textContent = "Taxi has been successfully ordered."
                statusRef.className = " taxi-ordered"
                orderBtnRef.disabled = false;
            })
            statusRef.addEventListener("click", () => {
                location.reload();
            })
        }


    })
    function createPara(input) {
        let p = document.createElement("p")
        p.textContent = input
        return p
    }
}





