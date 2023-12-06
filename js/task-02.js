
const images = [
{
url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
alt: 'White and Black Long Fur Cat',
},
{
url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
},
{
url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
alt: 'Group of Horses Running',
},
{
url:
'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
alt: 'Elephant Beside on Baby Elephant',
},
{
url:
'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
alt: 'Blue Geeen and Orange Parrot',
},
{
url:
'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
alt: 'Zebras on Zebra',
},
];

const ulEl = document.querySelector('.gallery');
const createGalEl = images.map
  (item => 
  `<li><img 
  src=${item.url} 
  alt=${item.alt} width=360 height=300/></li>`)
  .join('');
ulEl.insertAdjacentHTML('afterbegin', createGalEl);

const galleryRef = document.querySelector(".gallery");
galleryRef.classList.add("js-gallery");
const headRef = document.querySelector("head");

headRef.insertAdjacentHTML(
  "beforeend",
  `<style>
.js-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 1440px;
  height: 848px;
  padding: 100px 156px;
  column-gap: 24px;
  row-gap: 48px;
  list-style: none;
  margin: 0 auto;
}
.js-gallery > li {
  width: calc((100% - 48px) / 3);
  box-sizing: border-box;
}
.js-gallery > li > img {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  box-shadow: 2px 5px 5px rgb(0, 0, 0, 0,5);
  display: block;
  object-fit: cover;
  background: url(<path-to-image>), lightgray -76px -0.297px / 125.278% 100.198% no-repeat;
}
</style>`
);

