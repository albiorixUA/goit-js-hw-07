import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItemsContainer = document.querySelector(".gallery");
const makeGalleryMarkup = (gallery) => {
  const { preview, original, description } = gallery;
  return `
    <a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>`;
};

const galleryMarkup = galleryItems.map(makeGalleryMarkup).join("");
galleryItemsContainer.innerHTML = galleryMarkup;

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
