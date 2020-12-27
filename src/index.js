import './styles.css';
import refs from './js/refs';
import imageService from './js/image-service';
import renderGallery from './js/render-gallery';

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();
  const form = e.currentTarget;
  imageService.query = form.elements.query.value;

  if (!imageService.searchQuery) {
    return;
  }

  refs.gallery.innerHTML = '';
  form.reset();
  imageService.resetPage();
  fetchImages();
}

function onLoadMore(e) {
  e.preventDefault();
  fetchImages();
}

function fetchImages() {
  refs.loadMoreBtn.classList.add('is-hidden');
  imageService
    .fetchImages()
    .then(images => {
      renderGallery(images);
      refs.loadMoreBtn.classList.remove('is-hidden');

      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth',
      });
    })
    .catch(error => console.log(error));
}
