const loadMoreBtn = document.querySelector('[data-action="load-more"]');
const loadMoreBtnLabel = document.querySelector('.label');
const loadMoreBtnSpinner = document.querySelector('.spinner');

export default {
  show() {
    loadMoreBtn.classList.remove('is-hidden');
  },

  hide() {
    loadMoreBtn.classList.add('is-hidden');
  },

  enable() {
    loadMoreBtn.disabled = true;
    loadMoreBtnLabel.textContent = 'Loading';
    loadMoreBtnSpinner.classList.remove('is-hidden');
  },

  disable() {
    loadMoreBtn.disabled = false;
    loadMoreBtnLabel.textContent = 'Load more...';
    loadMoreBtnSpinner.classList.add('is-hidden');
  },
};
