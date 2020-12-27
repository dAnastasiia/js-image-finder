const BASE_URL = 'https://pixabay.com/api/';
const apiKey = '19670385-c29ff9f36201f4e7ced09e1e2';
let page = 1;
let perPage = 12;

function fetchImages(searchQuery) {
  const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=${perPage}&key=${apiKey}`;

  return fetch(url)
    .then(res => res.json())
    .then(data => data.hits)
    .catch(error => console.log(error));
}

export default fetchImages;
