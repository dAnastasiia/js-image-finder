import refs from './refs';
import imageCard from '../templates/image-card.hbs';

function renderGallery(hits) {
  const markup = imageCard(hits);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

export default renderGallery;
