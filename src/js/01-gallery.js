// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// 1. Знаходимо нашу UL-ку

const gallery = document.querySelector(`.gallery`);

// 2. Пишемо розмітку перебравши массив galleryItems через map

const markUp = createMarkUp(galleryItems);
function createMarkUp () {
    return galleryItems
    .map(({preview, original, description}) => {

// 3.  Пепеписуємо наповнення, від себе додав li, бо якось ul без li ріже очі :)

        return `
        <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
        </a>
      `
    })
    .join("");
}

// 4. Так само вставляємо наш маркап перед

gallery.insertAdjacentHTML("beforeend", markUp);


// 5. Далі юзаємо мануал суто з документації

const lightbox = new SimpleLightbox('.gallery a', {
    // 5.1 Опис
    captionsData: "alt",
    // 5.2 Ділей
    captionDelay: 250,
});


console.log(galleryItems);
