
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

const gallery = document.querySelector('.gallery');

const createGallery = images => {
  const galleryItems = images.map(
    image =>
      `<li class="item"><img class="picture" src="${image.url}" alt="${image.alt}"></li>`,
  );
  gallery.insertAdjacentHTML('afterbegin', galleryItems.join(''));
};
createGallery(images);

Вторая версия
const galleryList = document.querySelector('.gallery');

const newTags =
    '<li class="item"><img src="https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260"alt = "White and Black Long Fur Cat" width = "270" class="picture" ><img></li><li class="item"><img src="https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260" alt="Orange and White Koi Fish Near Yellow Koi Fish" width="270" class="picture"><img></li><li class="item"><img src="https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?&dpr=2&h=750&w=1260" alt="Group of Horses Running" width="270" class="picture"><img></li>';

 galleryList.insertAdjacentHTML('beforeend', newTags);
