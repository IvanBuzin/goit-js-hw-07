const bodyRef = document.querySelector("body");
const changeColorBtnRef = document.querySelector(".change-color");
bodyRef.classList.add("js-body");
const headRef = document.querySelector("head");
headRef.insertAdjacentHTML(
  "beforeend", `<style>
  .js-body .widget button {
    margin: 0px auto;
    color: #fff;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    letter-spacing: 0.64px;
    display: flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    background: #4e75ff;
    cursor: pointer;
    height: 40px;
  }

  }
  .js-body > changeColor > button {
    font-size: 16px;
  }
  .js-body .widget {
    display: inline-flex;
  padding: 100px 88px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 8px;
  background: #fff;
  }
  .js-body .widget p {
     margin: 0px;
  color: #2e2f42;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.64px;
  width: 169px;
  height: 24px;
  }
  </style>`
);
const textColorRef = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

}  

changeColorBtnRef.addEventListener("click", () => {
  bodyRef.style.backgroundColor = textColorRef.textContent = getRandomHexColor();
});


