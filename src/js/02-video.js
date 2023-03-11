import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

// /////////////
player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on('play', function () {
  console.log('played the video!');
});

////////////////

player.on('timeupdate', throttle(onTimeupdate, 1000));

function onTimeupdate({ seconds }) {
  localStorage.setItem(STORAGE_KEY, seconds);
}

const savedTime = localStorage.getItem(STORAGE_KEY);
// console.log(savedTime);

player.setCurrentTime(savedTime || 0.001).then(function (seconds) {});
