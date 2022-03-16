let promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("OK");
    // o
    //reject(new Error("Ocurrió un error"));
  }, 5000);
});

const loader = document.getElementById("loader");

loader.style.display = "block";

promesa
  .then((data) => {
    console.log(data);
  })

  .catch((err) => console.log(err.message))

  .finally(function () {
    loader.style.display = "none";
  })
