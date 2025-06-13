function solve() {
   const products = document.getElementsByClassName("product");
   let btnRef = '';
   let cart = {};
   let textArea = document.querySelector("textarea");

   for (const product of products) {
      let productName = product.getElementsByClassName("product-title")[0].textContent;
      btnRef = product.getElementsByClassName("add-product")[0]
      let price = product.getElementsByClassName("product-line-price")[0].textContent;

      btnRef.addEventListener("click", addItem)


      function addItem() {
         let p = document.createElement("p")
         price = Number(price)


         p.textContent = `Added ${productName} for ${price.toFixed(2)} to the cart.\n`


         textArea.value += p.textContent
         if (!cart[productName]) {
            cart[productName] = 0;
         }

         cart[productName] += price;
      }

   }
   const checkOutRef = document.getElementsByClassName("checkout")[0];
   checkOutRef.addEventListener("click", checkOut)

   function checkOut() {
      let entries = Object.entries(cart);
      let names = [];
      let sum = 0;
      for (const [name, price] of entries) {

         names.push(name)
         sum += Number(price);
      }

      textArea.value += `You bought ${names.join(`, `)} for ${sum.toFixed(2)}.`
      checkOutRef.removeEventListener("click", checkOut)
      for (const product of products) {
         btnRef = product.getElementsByClassName("add-product")[0]
         btnRef.disabled = true;


         btnRef.removeEventListener("click", addItem)
      }

   }
}