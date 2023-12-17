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

const bodyRef = document.querySelector("body");
bodyRef.classList.add("js-body");
const headRef = document.querySelector("head");
headRef.insertAdjacentHTML(
"beforeend", `<style>
.js-body ul#categories {
  display: inline-flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 8px;
  background: #fff;
  width: 440px;
  margin: 0;
}
.js-body .item {
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 8px;
  background: #f6f6fe;
  width: 392px;
}
.js-body ul#categories > .item > h2 {
  margin: 0px;
  height: 32px;
  color: #2e2f42;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 133.333% */
  letter-spacing: 0.96px;
}
.js-body ul#categories > .item > ul {
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}
.js-body ul#categories > .item > ul > li {
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 4px;
  border: 1px solid #808080;
  height: 40px;
  width: 360px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
}
</style>`
);