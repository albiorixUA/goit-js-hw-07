import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItemsContainer = document.querySelector(".gallery");

const galleryMarkup = makeGalleryMarkup(galleryItems);
addgalleryMarkuptoHtml(galleryMarkup);

function makeGalleryMarkup(pictures) {
  return pictures
    .map(
      ({
        preview,
        original,
        description,
      }) => `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} /></a>`
    )
    .join("");
}

function addgalleryMarkuptoHtml(markup) {
  galleryItemsContainer.innerHTML = markup;
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
