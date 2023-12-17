const loginFormRef = document.querySelector(".login-form");

loginFormRef.addEventListener("submit", handleSubmit);
loginFormRef.classList.add("js-loginForm");
const headRef = document.querySelector("head");
headRef.insertAdjacentHTML(
  "beforeend", `<style>
  .js-loginForm {
max-width: 408px;
height: 256px;
display: inline-flex;
padding: 24px;
flex-direction: column;
align-items: flex-start;
gap: 8px;
border-radius: 8px;
background: #FFF;
}
.js-loginForm label {
margin-bottom: 0;
width: 360px;
height: 72px;

line-height: 24px;
color: #2E2F42;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
letter-spacing: 0.64px;

display: flex;
flex-direction: column;
align-items: flex-start;
gap: 8px;
}
.js-loginForm label input {
width: 360px;
height: 40px;
flex-shrink: 0;
border-radius: 4px;
border: 1px solid #808080;
}
.js-loginForm label input:hover {
border: 1px solid #000;
}
.js-loginForm label input:active {
border: 1px solid #808080;

color: #2E2F42;

font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
letter-spacing: 0.64px;
}
.js-loginForm button {
  margin-top: 8px;
cursor: pointer;
display: flex;
padding: 8px 16px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 8px;
background: #4e75ff;

color: #FFF;

font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 150% */
letter-spacing: 0.64px;
max-width: 86px;
height: 40px;

 }
 .js-loginForm button:hover {
cursor: pointer;
display: inline-flex;
padding: 8px 16px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 8px;
background: #6C8CFF;

color: #FFF;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 150% */
letter-spacing: 0.64px;
 }
  </style>`
);

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

