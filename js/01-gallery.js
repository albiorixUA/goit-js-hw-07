import { galleryItems } from "./gallery-items.js";

const galleryItemsContainer = document.querySelector(".gallery");
const makeGalleryMarkup = (gallery) => {
  const { preview, original, description } = gallery;
  return `
    <div class="gallery__item">
      <a class="gallery__link" href=${original}>
        <img
          class="gallery__image"
          src=${preview}
          data-source=${original}
          alt=${description}
        />
      </a>
    </div>`;
};

const galleryMarkup = galleryItems.map(makeGalleryMarkup).join("");
galleryItemsContainer.innerHTML = galleryMarkup;

galleryItemsContainer.addEventListener("click", onOpenModal);

function onOpenModal(event) {
  event.preventDefault();
  const targetPicture = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src=${targetPicture}>
`);
  instance.show();
  if (instance.show()) {
    galleryItemsContainer.addEventListener("keydown", onEscKeyPress);
  }

  function onEscKeyPress(event) {
    const isEscKey = event.code === "Escape";
    if (isEscKey) {
      instance.close();
      galleryItemsContainer.removeEventListener("keydown", onEscKeyPress);
    }
  }
}
