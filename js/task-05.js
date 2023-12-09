const bodyRef = document.querySelector("body");
const changeColorBtnRef = document.querySelector(".change-color");
const textColorRef = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

}  

changeColorBtnRef.addEventListener("click", () => {
  bodyRef.style.backgroundColor = textColorRef.textContent = getRandomHexColor();
});


