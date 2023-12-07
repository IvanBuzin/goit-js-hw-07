const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const elements = item.querySelectorAll('li').length;

  console.log(`Category: ${title}
  Elements: ${elements}`
  );
});

const categoriesRef = document.querySelector(".categories");
categoriesRef.classList.add("js-categories");
const headRef = document.querySelector("head");

headRef.insertAdjacentHTML(
  "beforeend",
  `<stile>
  .js-categories {
  display: inline-flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 8px;
  background: #fff;
  width: 392px;
  height: 840px;
  padding: 24px;
  border-radius: 8px;
  color: rgba(128, 128, 128, 1);
justify-content: left;
}
.js-categories > li.item {
display: flex;
padding: 16px;
flex-direction: column;
gap: 16px;
 justify-content: left;
 border-radius: 8px;
background: #F6F6FE;
}
.js-categories > li.item > h2 {
color: #2e2f42;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 133.333% */
  letter-spacing: 0.96px;  
}
.js-categories > li.item > ul {
  display: flex;
flex-direction: column;
gap: 8px;
padding-inline-start: 0px;
}
.js-categories > li.item > ul > li {
  width: 360px;
height: 40px;
flex-shrink: 0;
border-radius: 4px;
border: 1px solid #808080;
color: rgba(128, 128, 128, 1);
}
</stile>`
);

//<link rel="preconnect" href="https://fonts.googleapis.com">
//<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"></link>