function lockedProfile() {
    const profilesRef = document.getElementsByClassName("profile")

    for (const profile of profilesRef) {
        let lockRef = profile.getElementsByTagName("input")[0];
        let unlockRef = profile.getElementsByTagName("input")[1];
        let button = profile.querySelector("button")
        // let hiddenRef = profile.getElementsByTagName("div")


        unlockRef.addEventListener("click", () => {

            unlockRef.checked = true
            if (unlockRef.checked === true) {
                button.addEventListener("click", showBtn)
            }
            function showBtn() {

                let button = profile.querySelector("button")
                let hiddenRef = profile.getElementsByTagName("div")
                if (button.textContent === "Show more") {
                    hiddenRef[0].style.display = "block"
                    button.textContent = "Hide it"
                } else {
                    hiddenRef[0].style.display = "none"
                    button.textContent = "Show more"
                }


            }
            lockRef.addEventListener("click", () => {

                button.removeEventListener("click", showBtn)
            })
        })


    }

}