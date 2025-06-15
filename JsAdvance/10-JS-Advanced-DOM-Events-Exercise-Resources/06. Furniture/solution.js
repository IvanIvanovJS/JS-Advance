function solve() {
  let inputTextAreaRef = document.querySelectorAll("textarea")[0];
  let outPutTextareaRef = document.querySelectorAll("textarea")[1];
  let generateBtn = document.querySelectorAll("button")[0];
  let buyBtn = document.querySelectorAll("button")[1];
  let tbodyRef = document.querySelector("tbody")
  /*
  decFactor
  img
  name
  price
  
  */
  generateBtn.addEventListener(`click`, () => {
    let data = JSON.parse(inputTextAreaRef.value);
    for (const furniture of data) {

      let createRow = document.createElement("tr");
      let createData = document.createElement("td");
      let createParagraph = document.createElement("p")
      let createImage = document.createElement("img")
      createImage.src = furniture.img;
      createData.appendChild(createImage);
      createRow.appendChild(createData)
      tbodyRef.appendChild(createRow)
      createData = document.createElement("td");
      createParagraph = document.createElement("p")
      createParagraph.textContent = furniture.name;
      createData.appendChild(createParagraph);
      createRow.appendChild(createData)
      tbodyRef.appendChild(createRow)
      createData = document.createElement("td");
      createParagraph = document.createElement("p")
      createParagraph.textContent = furniture.price;
      createData.appendChild(createParagraph);
      createRow.appendChild(createData)
      tbodyRef.appendChild(createRow)
      createData = document.createElement("td");
      createParagraph = document.createElement("p")
      createParagraph.textContent = furniture.decFactor;
      createData.appendChild(createParagraph);
      createRow.appendChild(createData)
      tbodyRef.appendChild(createRow)
      let createInput = document.createElement("input");
      createData = document.createElement("td");
      createInput.type = "checkbox"
      createData.appendChild(createInput);
      createRow.appendChild(createData)
      tbodyRef.appendChild(createRow)




    }
  })

  buyBtn.addEventListener("click", () => {
    let checks = document.getElementsByTagName("input");
    let tr = document.querySelectorAll("tbody tr");
    let bought = []
    let totalSum = 0;
    let totalDecor = 0;
    let counter = 0;
    for (const td of tr) {
      let [name, price, decFactor] = td.querySelectorAll("p");
      let checkRef = td.querySelector("input")

      if (checkRef.checked) {
        bought.push(name.textContent)
        totalSum += +price.textContent;
        totalDecor += + decFactor.textContent
        counter++
      }
    }
    outPutTextareaRef.value += `Bought furniture: ${bought.join(`, `)}\n`;
    outPutTextareaRef.value += `Total price: ${totalSum.toFixed(2)}\n`
    outPutTextareaRef.value += `Average decoration factor: ${totalDecor / counter}`



  })


}