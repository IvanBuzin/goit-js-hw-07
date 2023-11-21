
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];


 


const ulEl = document.querySelector('.gallery');
const createGalEl = images.map
  (item => 
  `<li><img 
  src=${item.url} 
  alt=${item.alt} width=360 height=240/></li>`)
  .join('');
ulEl.insertAdjacentHTML('afterbegin', createGalEl)
 
const galleryRef = document.querySelector(".gallery");
galleryRef.classList.add("js-gallery");
const headRef = document.querySelector("head");

headRef.insertAdjacentHTML(
  "beforeend",
  `<style>
.js-gallery {
  display: flex;
  flex-direction: column;
  list-style: none;
}
.js-gallery > li > img {
  max-width: 80%;
  border-radius: 50pt;
  border: solid 2px #551a8b;
}
</style>`
);

const imagesRef = images.map((value, idx, arr) => {
  const src = arr[idx]["url"];
  const alt = arr[idx]["alt"];
  const li = `<li><img src="${src}" alt="${alt}"></li>`;
  return li;
});

console.log("imagesRef: ", imagesRef);
galleryRef.insertAdjacentHTML("afterbegin", imagesRef.join(""));