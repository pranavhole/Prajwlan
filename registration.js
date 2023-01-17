const form = document.getElementById("registration-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = form.username.value;
  const email = form.email.value;
  const password = form.password.value;

  // Send data to server to be saved in MongoDB
});
