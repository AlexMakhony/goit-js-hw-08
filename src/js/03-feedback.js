import throttle from 'lodash.throttle';
// Переменные
const refs = {
    form: document.querySelector('.feedback-form'),
    mail: document.querySelector('input'),
    textAr: document.querySelector('textarea')
};

// Ликвидируем антипатерн

const STORAGE_KEY = 'Feed-msg-2';

populateTextArea()

// Слушатели

refs.form.addEventListener('submit', onFormSubmit);
refs.textAr.addEventListener('input', throttle(onTextInput, 1000));

// Функция хранения input
function onTextInput(event) {
    const messageEl = event.target.value;
    localStorage.setItem(STORAGE_KEY, messageEl);
}

// Функция отправки формы
function onFormSubmit(event) {
    // Ресет заводских настроек
    event.preventDefault();
    // Чистим форму after "submit"
    event.currentTarget.reset();
    // Чистим локалочку при нажатии САБМИТ
    localStorage.removeItem(STORAGE_KEY);
}

// Делаем настроечку чтобы оставался текст в форме
function populateTextArea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        refs.textAr.value = savedMessage;
    }
};

