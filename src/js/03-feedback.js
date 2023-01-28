// импортирует тротл
import throttle from 'lodash.throttle';

// находим необходимые элементы
const form = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');

// вещаем слушателей + тротл на импут
form.addEventListener('input', throttle(onInputChange, 500));
form.addEventListener('submit', onFormSubmit);
// Боремся с антипатерн
const STORAGE_KEY = 'feedback-form-state';
const feedbackFormState = localStorage.getItem(STORAGE_KEY)
  ? JSON.parse(localStorage.getItem(STORAGE_KEY))
  : {};

// объявляем для сохранения заполнения
populateTextarea();

// Ставим функцию по отслеживанию заполнения + делаем сетайтем для хранения в локалке
function onInputChange(e) {
  feedbackFormState[e.target.name] = e.target.value;
  localStorage.setItem(
    STORAGE_KEY,
    // обрабатыввем данные
    JSON.stringify(feedbackFormState)
  );
}

// Ставим функцию на чистку формы после нажатия сабмит
function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

// Ставим функцию автозаполнения
function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    emailEl.value = savedMessage['email'] || '';
    messageEl.value = savedMessage['message'] || '';
  }
}