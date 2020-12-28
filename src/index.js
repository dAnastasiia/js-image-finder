import './styles.css';
import refs from './js/refs';
import onClickImage from './js/modal';
import imageService from './js/image-service';
import loadMoreBtn from './js/loadMoreBtn';
import renderGallery from './js/render-gallery';

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);
refs.gallery.addEventListener('click', onClickImage);

function onSearch(e) {
  e.preventDefault();
  const form = e.currentTarget;
  imageService.query = form.elements.query.value;

  if (!imageService.searchQuery) {
    return;
  }

  clearGallery();
  imageService.resetPage();
  fetchImages();
  form.reset();
}

function onLoadMore(e) {
  e.preventDefault();
  fetchImages();
}

function fetchImages() {
  loadMoreBtn.show();
  loadMoreBtn.enable();

  imageService
    .fetchImages()
    .then(images => {
      renderGallery(images);
      loadMoreBtn.disable();

      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth',
      });
    })
    .catch(error => console.log(error));
}

function clearGallery() {
  refs.gallery.innerHTML = '';
}
