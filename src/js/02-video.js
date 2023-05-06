import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const saveTimeLocalStorage = time => {
  localStorage.setItem('videoplayer-current-time', time);
};

const getTimeFromLocalStorage = () => {
  return localStorage.getItem('videoplayer-current-time');
};

player.on(
  'timeupdate',
  throttle(() => {
    player.getCurrentTime().then(time => {
      saveTimeLocalStorage(time);
    });
  }, 1000)
);

const storedTime = getTimeFromLocalStorage();

if (storedTime !== null) {
  player.setCurrentTime(storedTime);
}
