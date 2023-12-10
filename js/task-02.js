
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
  "beforeend", `<style> 
.js-gallery {
  display: flex;
  width: 1440px;
  padding: 100px 156px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  row-gap: 48px;
  background: #fff;
  flex-wrap: wrap;
}
.js-gallery > li {
  width: calc((100% - 48px) / 3);
  box-sizing: border-box;
  height: 300px;
  flex-shrink: 0;
  padding: 0;
  border-radius: 0%;
  border: 0cap; 
}
</style>`
 
);

