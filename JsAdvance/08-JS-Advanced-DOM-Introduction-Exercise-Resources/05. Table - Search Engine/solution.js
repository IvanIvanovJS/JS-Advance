function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let table = document.querySelectorAll("tbody tr")
   let searchField = document.getElementById("searchField")
   function onClick() {
      let searching = searchField.value;
      if (!searching) {
         return;
      }
      let tableRoll = Array.from(table);
      searchField.value = ""
      for (const row of tableRoll) {
         let tableData = row.textContent;
         if (tableData.includes(searching)) {
            row.classList.add("select")
         } else {
            row.classList.remove("select")
         }

      }

   }
}