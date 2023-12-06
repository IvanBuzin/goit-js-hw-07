

const divBoxesRef = document.querySelector("#boxes");
divBoxesRef.style.display = "flex";
divBoxesRef.style.flexWrap = "wrap";

const inputNumberRef = document.querySelector("input");

const createBtnRef = document.querySelector("[data-create]"); 
const destroyBtnRef = document.querySelector("[data-destroy]"); 


function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    const box = document.createElement("div");
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.backgroundColor = color;
    boxes.push(box);
  }
  divBoxesRef.append(...boxes);
}


const destroyBoxes = function () {
  divBoxesRef.innerHTML = "";
  nClick = 0;
};


const clearInput = function () {
  inputNumberRef.value = "";
  nClick = 0;
};

let nClick = 0;
inputNumberRef.addEventListener("input", (event) => {
  if (
    +event.currentTarget.value > inputNumberRef.max ||
    +event.currentTarget.value < inputNumberRef.min - 1
  ) {
    nClick = 0;
    alert(
      `Введене число поза діапазоном(${inputNumberRef.min} - ${inputNumberRef.max}), повторіть знову`
    );
  } else {
    nClick = +event.currentTarget.value;
  }
});

inputNumberRef.addEventListener("focus", (event) => {
  destroyBoxes();
});

createBtnRef.addEventListener("click", () => {
  createBoxes(nClick);
  clearInput();
});

destroyBtnRef.addEventListener("click", () => {
  destroyBoxes();
  clearInput();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}