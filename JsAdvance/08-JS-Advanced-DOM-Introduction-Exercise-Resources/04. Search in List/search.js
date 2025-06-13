function search() {
   let listOfCitis = document.querySelectorAll("li")

   let arrOfCitis = Array.from(listOfCitis);
   let searchCity = document.getElementById("searchText");
   let counter = 0;
   let match = searchCity.value;
   for (const element of arrOfCitis) {
      let formatted = `<bold><u>${element.textContent}</u></bold>`;

      element.innerHTML = element.textContent;

      if (element.textContent.includes(match)) {
         element.innerHTML = formatted;
         counter++;
      }
   }
   let result = document.getElementById("result");
   result.textContent = `${counter} matches found`

}
