const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', handleInputChange);

function handleInputChange(event) {
  textOutput.textContent = event.currentTarget.value;
  if (event.currentTarget.value.trim() === ''| null) {
    textOutput.textContent = 'Anonymous';
    }     
}

const bodyRef = document.querySelector("body");
bodyRef.classList.add("js-body");
const headRef = document.querySelector("head");
headRef.insertAdjacentHTML(
"beforeend", `<style>
.js-body {
display: inline-flex;
padding: 24px;
flex-direction: column;
align-items: flex-start;
gap: 16px;
border-radius: 8px;
background: #FFF;
width: 408px;
}
.js-body #name-input {
padding-top: 8px;
padding-bottom: 8px;
padding-left: 16px;
border-radius: 4px;
border: 1px solid #808080;
width: 360px;
height: 40px;
flex-shrink: 0;

color: #2E2F42;

font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
letter-spacing: 0.64px;
}
.js-body #name-output {
  color: #2e2f42;

  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 133.333% */
  letter-spacing: 0.96px;
  margin: 0px;

}
.js-body h1 {
 margin: 0px;
}
</style>`
);