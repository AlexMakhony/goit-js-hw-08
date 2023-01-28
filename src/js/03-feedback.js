// импортирует тротл
import throttle from 'lodash.throttle';

// находим необходимые элементы
const form = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');

// вещаем слушателей + тротл на импут
form.addEventListener('input', throttle(onInputChange, 500));
form.addEventListener('submit', onFormSubmit);
const feedbackFormState = localStorage.getItem('feedback-form-state')
  ? JSON.parse(localStorage.getItem('feedback-form-state'))
  : {};

// объявляем для сохранения заполнения
populateTextarea();

// Ставим функцию по отслеживанию заполнения + делаем сетайтем для хранения в локалке
function onInputChange(e) {
  feedbackFormState[e.target.name] = e.target.value;
  localStorage.setItem(
    'feedback-form-state',
    // обрабатыввем данные
    JSON.stringify(feedbackFormState)
  );
}

// Ставим функцию на кнопку для обнуления формы и локалки
function onFormSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const feedbackFormState = new FormState(form);
  const updateForm = {};
  if (emailEl.value === '' || messageEl.value === '') {
    alert('Please fill in the empty fields');
    return;
  }
  updateForm[key] = value;
  console.log(updateForm);
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

// Ставим функцию автозаполнения
function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedMessage) {
    // console.log(savedMessage);
    emailEl.value = savedMessage['email'] || '';
    messageEl.value = savedMessage['message'] || '';
  }
}