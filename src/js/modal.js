import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

function onClickImage(e) {
  const url = e.target.dataset.image;
  const instance = basicLightbox.create(`
              <img src="${url}" />
            `);
  instance.show();
}

export default onClickImage;
