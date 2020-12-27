import refs from './refs';
import imageCard from '../templates/image-card.hbs';

function renderGallery(hits) {
  /// MAKE NOTIFICATION
  //   if (hits.length === 0) {
  //     console.log('ERROR');
  //     return;
  //   }
  const markup = imageCard(hits);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

export default renderGallery;
