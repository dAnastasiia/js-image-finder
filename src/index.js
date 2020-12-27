import './styles.css';
import refs from './js/refs';
import fetchImages from './js/fetch-images';
import renderGallery from './js/render-gallery';

// let page = 1;
// let perPage = 12;

refs.searchForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const inputValue = form.elements.query.value;

  if (!inputValue) {
    return;
  }

  refs.gallery.innerHTML = '';
  form.reset();

  fetchImages(inputValue)
    .then(renderGallery)
    .catch(error => console.log(error));
}
