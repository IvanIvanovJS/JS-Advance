function create(words) {
   let content = document.getElementById("content")

   for (const word of words) {
      let div = document.createElement("div")
      let p = document.createElement("p");
      p.textContent = word;
      p.style.display = "none"
      content.appendChild(div);
      div.appendChild(p)
      div.addEventListener("click", () => {


         p.style.display = ""
      })
   }


}