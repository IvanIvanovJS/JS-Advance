async function lockedProfile() {
    const response = await fetch("http://localhost:3030/jsonstore/advanced/profiles")
    const data = await response.json();
    let usersInfo = Object.values(data);
    const mainDivRef = document.getElementById("main")
    mainDivRef.replaceChildren();
    /*  age:31
        email: "john@users.bg"
        username: "John"
        _id: "fb352199-bcbc-4e1d-a1dc-ed346a6fb49a"*/
    usersInfo.forEach((element, index) => {
        mainDivRef.innerHTML += `<div class="profile">
				<img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input id="lock${index}" type="radio" name="user${index}Locked" value="lock" checked>
				<label>Unlock</label>
				<input id="unlock${index}" type="radio" name="user${index}Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user1Username" value="${element.username}" disabled readonly />
				<div class="user${index}Username" style="display: none;">
					<hr>
					<label>Email:</label>
					<input type="email" name="user${index}Email" value="${element.email}" disabled readonly />
					<label>Age:</label>
					<input type="number" name="user${index}Age" value="${element.age}" disabled readonly />
				</div>
				
				<button class="btn${index}">Show more</button>
			</div>`

    });
    usersInfo.forEach((element, index) => {
        const btnRef = document.querySelector(`.btn${index}`);
        const infoRef = document.querySelector(`.user${index}Username`);
        const lockRef = document.getElementById(`lock${index}`);
        const unlockRef = document.getElementById(`unlock${index}`);

        btnRef.addEventListener("click", () => {
            if (unlockRef.checked) {
                if (infoRef.style.display === "none" || infoRef.style.display === "") {
                    infoRef.style.display = "block";
                    btnRef.textContent = "Hide it";
                } else {
                    infoRef.style.display = "none";
                    btnRef.textContent = "Show more";
                }
            }
        });

    })


}
