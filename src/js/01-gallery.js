import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

function createGalleryItem(items) {
  return items
  .map(
    ({ preview, original, description }) => `
    <li class="gallery__link">
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>
  `
  )
  .join(' ');
}

const addGalleryItem = createGalleryItem(galleryItems);

gallery.innerHTML = addGalleryItem;


const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
});
