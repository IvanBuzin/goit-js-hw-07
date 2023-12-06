const loginFormRef = document.querySelector(".login-form");

loginFormRef.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert('All form fields must be filled in');
  }
  const user = { Email: email.value, Password: password.value };
  console.log("user: ", user);
  event.currentTarget.reset();
}