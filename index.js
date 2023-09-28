// afficher le country de l'index1 seulement
// fetch("./sales_100.json")
// .then((response) => response.json())
// .then((data) => console.log(data.sales_100[0].country));
// ---------------------------------------------------------------------------------------

// Afficher toutes les country avec forEach()
//  fetch("./sales_100.json")
//    .then((response) => response.json())
//    .then((data) => {
//      data.sales_100.forEach((element) => {
//        console.log(element.country);
//      });
//    });
// -----------------------------------------------------------------------------------------

//Afficher les régions avec filer()
// fetch("./sales_100.json")
//   .then((response) => response.json())
//   .then((data) => {
//     data.sales_100.filter((element) => {

//       console.log(element.order_id);
//     });
//   });
// ------------------------------------------------------------------------------------------

// Afficher avec map()
 fetch("./sales_100.json")
   .then((response) => response.json())
   .then((data) => {
    document.body.innerHTML = data.sales_100.map((user) => 
            `  <div class="container">
                <h1> &#128578; &#128564;</h1> <h1>  </h1>
                        <h2>${user.country} <br> ${user.region}</h2>
                        <p>${user.unit_cost} ${user.units_sold}${user.units_sold}</p>
                        <p>${user.item_type} <br> ${user.sales_channel}</p>
                        <p>order_date: ${user.order_date} </p>
                        <p>ship_date: ${user.ship_date} </p>
                        <b> <i>${user.order_id}</i> </b><br>
           
                </div>
            `
    )

   });
// --------------------------------------------------------------------------------------------------


// Lire les fichier csv

// fetch("./nba.csv")
//    .then((response) => response.text())
//    .then((data) => {

//     // Diviser le texte CSV en lignes
//     const lines = data.split('\n');
//       // Parcourir chaque ligne
//       lines.forEach(line => {
//         // Diviser la ligne en colonnes en utilisant la virgule comme délimiteur
//         const columns = line.split(',');
  
//         console.log(columns);
//       });
//     })
//     .catch(error => {
//       console.error('Erreur lors de la lecture du fichier CSV:', error);
//    });


