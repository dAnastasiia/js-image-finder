import './styles.css';
import imageCard from './templates/image-card.hbs';

const refs = {
  gallery: document.querySelector('.gallery'),
};

const BASE_URL = 'https://pixabay.com/api/';
const apiKey = '19670385-c29ff9f36201f4e7ced09e1e2';

let page = 1;
let perPage = 12;
let query = 'flower';

fetch(
  `${BASE_URL}?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=${perPage}&key=${apiKey}`,
)
  .then(res => res.json())
  .then(({ hits }) => {
    const markup = imageCard(hits);
    refs.gallery.innerHTML = markup;
    // console.log(hits);
  });

// function renderGallery(data) {
//   const markup = imageCard(data.hits);
//   refs.gallery.insertAdjacentHTML = markup;
// }
