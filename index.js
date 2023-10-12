
 fetch("./sales_100.json")
   .then((response) => response.json())
   .then((data) => {
     const select = document.getElementById("item-chose");
     const boite = document.getElementById("item_list");

     select.addEventListener("change", function () {
       const valeur = select.value;

       if (valeur === "tous") {
         boite.innerHTML = data.sales_100.map(
           (element) =>
             `  <div class="container">
                                <h4> &#128578; &#128564</h4> 
                                        <h5>${element.country} <br> ${element.region}</h5>
                                        <p>${element.unit_cost} ${element.units_sold}${element.units_sold}</p>
                                        <p>${element.item_type} <br> ${element.sales_channel}</p>
                                        <p>order_date: ${element.order_date} </p>
                                        <p>ship_date: ${element.ship_date} </p>
                                        <b> <i>${element.order_id}</i> </b><br>
                                                 </div>
                         `
         )
         .join("");
       
       } else if (valeur === "region") {
         const regions = [...new Set(data.sales_100.map((element) => element.region))];
         const regionStatistics = [];

         regions.forEach((region) => {
           const regionDetails = data.sales_100.filter((element) => element.region === region);
           const somme = regionDetails.reduce((accumulateur, currentValue) => accumulateur + currentValue.units_sold, 0);
           regionStatistics.push({ region, somme });
         });

         const tableHTML = `
           <table border="1">
             <tr>
               <th>Région</th>
               <th>Somme des unités vendues</th>
             </tr>
             ${regionStatistics.map((statistic) => `
               <tr>
                 <td>${statistic.region}</td>
                 <td>${statistic.somme}</td>
               </tr>
             `).join('')}
           </table>
         `;
         boite.innerHTML = tableHTML;
        
       } else if (valeur === "histo") {
        const regions = [...new Set(data.sales_100.map((element) => element.region))];
    
        const sums = [];  // Tableau pour stocker les sommes par région
    
        regions.forEach((region) => {
          const regionDetails = data.sales_100.filter((element) => element.region === region);
          const sum = regionDetails.reduce((accumulateur, currentValue) => accumulateur + currentValue.units_sold, 0);
          sums.push(sum); // Ajoutez la somme au tableau des sommes
        });
    
        //Model Bar
        const barCanvas = document.getElementById("barCanvas");
    
        const barChart = new Chart(barCanvas, {
          type: "bar",
          data: {
            labels: regions,
            datasets: [
              {
                label: 'Unité de vente par région',
                data: sums, 
                backgroundColor: [
                  "crimson",
                  
                ],
              },
            ],
          },
        });
          boite.innerHTML = "";
       } else {
         boite.innerHTML = "";
        

       }
     });
   });

 