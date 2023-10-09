fetch("./sales_100.json")
  .then((response) => response.json())
  .then((data) => {
    const select = document.getElementById("item-chose");
    const boite = document.getElementById("item_list");
    const paragraphe = document.getElementById("paragraphe");
    const regions = [...new Set(data.sales_100.map((element) => element.region))];

    select.addEventListener("change", function () {
      const valeur = select.value;

      if (valeur === "tous") {
      
        boite.innerHTML = data.sales_100.map(
                     (user) =>
                       `  <div class="container">
                               <h4> &#128578; &#128564;</h4> 
                                       <h5>${user.country} <br> ${user.region}</h5>
                                       <p>${user.unit_cost} ${user.units_sold}${user.units_sold}</p>
                                       <p>${user.item_type} <br> ${user.sales_channel}</p>
                                       <p>order_date: ${user.order_date} </p>
                                       <p>ship_date: ${user.ship_date} </p>
                                       <b> <i>${user.order_id}</i> </b><br>
                      
                          </div>
                        `
                   );
                   paragraphe.innerHTML ="";

      } else if (valeur === "region") {
    
        boite.innerHTML = regions
          .map(
            (region) =>
              `<button class="btn" data-region="${region}">${region}</button>`
          )
          .join("");
        const buttons = document.querySelectorAll(".btn");
        buttons.forEach((button) => {
          button.addEventListener("click", function () {
            const region = this.getAttribute("data-region");
            const regionDetails = data.sales_100.filter(
              (element) => element.region === region
            );
            const somme = regionDetails.reduce(function (accumulateur, currentValue) {
              return accumulateur + currentValue.units_sold;
            }, 0); // Initialisez à zéro

            // Affiche la somme dans le paragraphe
            paragraphe.innerHTML = `Somme des unités vendues dans ${region}: ${somme}`
          });
        });
       
      }else if(valeur === "histo"){
        
        //Model Bar
        const barCanvas = document.getElementById("barCanvas");

        const barChart = new Chart(barCanvas,{
            type : "bar" ,
            data: {
                labels : ["Sub-Saharan", "Australia and Oceania", "Middle East and North Africa", "Europe", "Asia", "North America" , "Central America and the Caribbean"],
                datasets: [{
                    data: [182870, 68325, 48678, 98117, 59967, 19143, 35771],
                    backgroundColor: [
                        "crimson","lightgreen", "lightblue", "violet", "yellow" ,"#56d798",
                        "#ff8397",
                    ]
                }]
            },
       
        })
        boite.innerHTML = barChart;
      

      }
       else {
          boite.innerHTML = "";
          paragraphe.innerHTML = "";
         
      }
    });
  });



