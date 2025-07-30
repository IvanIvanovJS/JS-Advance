import { html, render } from "./node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";
const townsRef = document.querySelector("#towns")
loadTowns()
function loadTowns() {
   const list = towns.map(t => html`<li>${t}</li>`)
   render(html`<ul>${list}</ul>`, townsRef)
}
document.querySelector("button").addEventListener("click", search)
function search() {
   const searchWord = document.querySelector("#searchText").value
   let counter = 0;
   document.querySelectorAll("li").forEach(li => {
      if (li.textContent.includes(searchWord) && searchWord !== "") {
         li.classList.add("active")
         counter++
      } else {
         li.className = ""
      }
   })
   render(html`${counter} matches found`, document.querySelector("#result"))

}
