import throttle from 'lodash.throttle';
// Переменные
const refs = {
    form: document.querySelector('.feedback-form'),
    mail: document.querySelector('input'),
    textAr: document.querySelector('textarea')
};

populateTextArea()

// Слушатели

refs.form.addEventListener('submit', onFormSubmit);
refs.textAr.addEventListener('input', onTextInput);

// Функция хранения input
function onTextInput(event) {
    const messageEl = event.target.value;
    localStorage.setItem('Feed-msg', messageEl);
}

// Функция отправки формы
function onFormSubmit(event) {
    // Ресет заводских настроек
    event.preventDefault();
    // Чистим форму after "submit"
    event.currentTarget.reset();
    // Чистим локалочку при нажатии САБМИТ
    localStorage.removeItem('Feed-msg');
}

// Делаем настроечку чтобы оставался текст в форме
function populateTextArea() {
    const savedMessage = localStorage.getItem('Feed-msg');
    if (savedMessage) {
        refs.textAr.value = savedMessage;
    }
};

