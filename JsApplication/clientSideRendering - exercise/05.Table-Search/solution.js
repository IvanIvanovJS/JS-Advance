import { html, render } from "./node_modules/lit-html/lit-html.js";



document.querySelector('#searchBtn').addEventListener('click', onClick);
const url = "http://localhost:3030/jsonstore/advanced/table"
const tableRoot = document.querySelector("tbody")
loadTable()
async function loadTable() {
   const response = await fetch(url)
   const data = await response.json()
   const records = Object.values(data)
   render(records.map(record => tableTemplate(record)), tableRoot)

}
function tableTemplate(record) {

   return html`<tr>
                <td>${record.firstName} ${record.lastName}</td>
                <td>${record.email}</td>
                <td>${record.course}</td>
            </tr>`

}
function onClick() {
   const input = document.getElementById("searchField")
   const tableData = document.querySelectorAll("tr");

   tableData.forEach(tr => {
      const trData = tr.textContent.toLowerCase()
      const value = input.value.toLowerCase()
      if (trData.includes(value)) {
         tr.classList.add("select")
      } else {
         tr.className = ""
      }
   })
   input.value = ""
}
