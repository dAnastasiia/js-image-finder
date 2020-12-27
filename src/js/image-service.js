export default {
  apiKey: '19670385-c29ff9f36201f4e7ced09e1e2',
  baseUrl: 'https://pixabay.com/api/',
  searchQuery: '',
  page: 1,

  fetchImages() {
    const url = `${this.baseUrl}?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=4&key=${this.apiKey}`;

    return fetch(url)
      .then(res => res.json())
      .then(({ hits }) => {
        this.incrementPage();
        return hits;
      })
      .catch(error => console.log(error));
  },

  get query() {
    return this.searchQuery;
  },

  set query(newQuery) {
    this.searchQuery = newQuery;
  },

  resetPage() {
    this.page = 1;
  },

  incrementPage() {
    this.page += 1;
  },
};
