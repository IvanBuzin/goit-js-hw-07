
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

const bodyRef = document.querySelector("body");
bodyRef.classList.add("js-body");
const headRef = document.querySelector("head");
headRef.insertAdjacentHTML(
  "beforeend", `<style>
  .js-body #controls {
     display: flex;
  padding: 32px;
  align-items: flex-start;
  gap: 16px;
  border-radius: 8px;
  width: 486px;
  height: 104px;
  background: #F6F6FE;
  }
.js-body #controls input {
  display: flex;
  padding: 8px 72px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid #808080;

  color: #2e2f42;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.64px;
  width: 150px;
  height: 40px;
}
 .js-body #controls [data-create] {
  cursor: pointer;
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
  width: 120px;
  height: 40px;
  border-color: #4e75ff;
}
.js-body #controls [data-create]:hover {
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #6C8CFF;
}
.js-body #controls [data-destroy] {
  cursor: pointer;
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
  background: #ff4e4e;
  width: 120px;
  height: 40px;
  border-color: #ff4e4e;
}
.js-body #controls [data-destroy]:hover {
display: flex;
width: 120px;
padding: 8px 16px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 8px;
background: #FF7070;
}
  </style>`
);