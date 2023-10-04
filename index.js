fetch("./sales_100.json")
  .then((response) => response.json())
  .then((data) => {
    const select = document.getElementById("item-chose");
    const boite = document.getElementById("item_list");
    const para = document.getElementById("paragraphe")
    const regions = [...new Set(data.sales_100.map((user) => user.region))]; // Utilisez un ensemble (Set) pour obtenir des régions uniques.

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
              (user) => user.region === region
            );
            const detailsHTML = regionDetails.map(
              (user) =>
                `<div class="container">
                            <h5> ${user.region}</h5>
                            <p>Type d'article: ${user.item_type}</p>
                            <p>Unité vendue: ${user.units_sold}</p>
                            <p>Prix unitaire: ${user.unit_price}</p>
                            <p>Cout unitaire: ${user.unit_cost}</p>
                  </div>
                `
            );
            para.innerHTML = detailsHTML.join("");
          });
        });
      } else {
        boite.innerHTML = "";
        para.innerHTML = "";
      }
    });
  });
