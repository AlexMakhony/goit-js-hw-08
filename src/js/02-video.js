// Шаг 1 импортируем пакеты после того как добавили их в npm
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Шаг 2 Инициализируем плеер по документации
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

// Шаг 3 Вставляем событие ОН с документации
const onPlay = function(timeupdate) {

    // Шаг 4 Тротлим, сохраняя в локальный сторедж событие ключ+велью
    throttle(
        localStorage.setItem('videoplayer-current-time', timeupdate.seconds),
        1000
      );
};

// Шаг 5 запускаем плеер
player.on('timeupdate', onPlay);

// Шаг 6 Обращаемся к локал сторейджу: найди данные в локалке по ключу и верни на каком времени
// закончилось видео...
if (localStorage.getItem('videoplayer-current-time') || 0) {
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
  }