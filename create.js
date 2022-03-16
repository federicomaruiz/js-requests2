const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendData(form);
});

async function sendData() {
  try {
    const formData = new FormData(form);
    const queryString = new URLSearchParams(formData).toString();
    console.log(queryString);
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: queryString,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    if (!response.ok) {
      const message = `Error: ${response.status}`;
      throw new Error(message);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
