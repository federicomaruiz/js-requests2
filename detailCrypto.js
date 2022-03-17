let promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("OK");
    // o
    //reject(new Error("Ocurrió un error"));
  }, 2000);
});

const loader = document.getElementById("loader");

loader.style.display = "block";

promesa
  .then((data) => {
    console.log(data);

    async function onRequestAwait() {
      try {
        const urlParams = new URLSearchParams(window.location.search);

        const id = urlParams.get("id");

        const url = `https://api.coingecko.com/api/v3/coins/${id}`;

        console.log(url);

        const response = await fetch(url);
        const usersJson = await response.json();

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        printData(usersJson);
      } catch (error) {
        console.log(error);
      }
    }

    function printData(usersJson) {

      const lista = document.getElementById("lista");
      
      const h3 = document.createElement("h3");
      const p = document.createElement("p");
      const br = document.createElement("br");
      const porcentaje = document.createElement("p");
      const img = document.createElement("img");
      

      h3.textContent = usersJson.name;

      p.textContent = "€ " + usersJson.market_data.current_price.eur;

      porcentaje.textContent = "% " + usersJson.market_data.price_change_percentage_24h;

      img.src = usersJson.image.large;

      lista.appendChild(h3);
      lista.appendChild(p);
      lista.appendChild(porcentaje);
      lista.appendChild(img);
      
    }

    onRequestAwait();
  })

  .catch((err) => console.log(err.message))

  .finally(function () {
    loader.style.display = "none";
  });
