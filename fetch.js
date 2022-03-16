const btRequest = document.getElementById("btRequest");

btRequest.addEventListener("click", () => {
  onRequestAwait();
});

function onRequest() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => {
      console.log(error);
    });
}

async function onRequestAwait() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersJson = await response.json();

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    console.log(usersJson);
  } catch (error) {
    console.log(error);
  }
}
