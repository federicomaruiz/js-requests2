let xhr;
if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
else xhr = new ActiveXObject("Microsoft.XMLHTTP");

xhr.open("GET", "https://jsonplaceholder.typicode.com/albums");

xhr.addEventListener("load", (data) => {
  const dataJSON = JSON.parse(data.target.response);

  if (data.currentTarget.status < 400) printData(dataJSON);
  else console.log("Load callback - error!");
});
xhr.send();

function printData(dataJSON) {
  const lista = document.getElementById("lista");

  /*
    Pido Albums
        Pido usuarios
            Recorro los albums para pintarlos
    
    */
  let xhr;
  if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
  else xhr = new ActiveXObject("Microsoft.XMLHTTP");

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  xhr.addEventListener("load", (data) => {
    const userJSON = JSON.parse(data.target.response);

    if (data.currentTarget.status < 400) {
      for (const albumInfo of dataJSON) {
        const h2 = document.createElement("h3");
        const p = document.createElement("p");

        h2.textContent = albumInfo.title;
        const user = userJSON.find((element) => {
          const existUser = albumInfo.userId === element.id;

          return existUser;
        });
        p.textContent = user.name;

        lista.appendChild(h2);
        lista.appendChild(p);
      }
    } else console.log("Load callback - error!");
  });
  xhr.send();
}

function printDataFail(dataJSON) {
  const lista = document.getElementById("lista");
  for (const albumInfo of dataJSON) {
    const h2 = document.createElement("h3");
    const p = document.createElement("p");

    h2.textContent = albumInfo.title;

    let xhr;
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
    else xhr = new ActiveXObject("Microsoft.XMLHTTP");

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.addEventListener("load", (data) => {
      const userJSON = JSON.parse(data.target.response);

      if (data.currentTarget.status < 400) {
        const user = userJSON.find((element) => {
          const existUser = albumInfo.userId === element.id;

          return existUser;
        });

        p.textContent = user.name;
        lista.appendChild(p);
      } else console.log("Load callback - error!");
    });
    xhr.send();

    lista.appendChild(h2);
  }
}
