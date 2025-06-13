function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   //textAreaRef[0].value = ""
   let textAreaRef = document.getElementsByTagName("textarea");


   let resultRestRef = document.getElementById("bestRestaurant")
   //paragraph[0].textContent = ""
   let paragraph = resultRestRef.getElementsByTagName("p");

   let resultWorker = document.getElementById(`workers`);
   //workersParagraph[0].textContent = ""
   let workersParagraph = resultWorker.getElementsByTagName("p");

   function onClick() {

      /*["PizzaHut - Peter 500, George 300, Mark 800",
      "TheLake - Bob 1300, Joe 780, Jane 660"]
      */

      let data = JSON.parse(textAreaRef[0].value);
      let bestRestaurant = {
         name: "",
         averageSalary: 0,
         bestSalary: 0,
         workers: {}
      }
      let averageRestSalary = 0;
      for (const element of data) {
         let [nameOfRest, ...workers] = element.split(` - `)
         workers = workers[0].split(', ')
         let currentAverage = 0;
         let maxSalary = 0;
         let objBuff = {

         }
         for (const element1 of workers) {
            let [worker, salary] = element1.split(` `);
            salary = Number(salary)
            currentAverage += salary;
            objBuff[worker] = salary;
            if (salary > maxSalary) {
               maxSalary = salary;
            }



         }
         if (currentAverage / workers.length > bestRestaurant.averageSalary) {
            averageRestSalary = currentAverage;
            bestRestaurant.averageSalary = averageRestSalary / workers.length;
            bestRestaurant.name = nameOfRest;
            bestRestaurant.bestSalary = maxSalary;
            bestRestaurant.workers = objBuff;
         }

      }
      paragraph[0].textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`
      let arr = Object.entries(bestRestaurant.workers).sort((a, b) => b[1] - a[1]);


      let result = []
      for (const [key, value] of arr) {
         result.push(`Name: ${key} With Salary: ${value}`)
      }

      workersParagraph[0].textContent = result.join(` `).trim()


   }


}