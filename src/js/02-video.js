import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

localStorage.setItem("videoplayer-current-time", "timeupdate.seconds");
console.log(localStorage.getItem("videoplayer-current-time"));
    
const onPlay = function ({ duration, percent, seconds }) {
    const stopTime = evt.setCurrentTime;
    console.log(stopTime);
    // data is an object containing properties specific to that event
};

player.on('timeupdate', onPlay);

function onPlay() {
   localStorage.setItem("videoplayer-current-time", "timeupdate.seconds"); 
}



// {
//     duration: 61.857
//     percent: 0.049
//     seconds: 3.034
// }

// timeupdate
// Triggered as the currentTime of the video updates. 
// It generally fires every 250ms, but it may vary depending 
// on the browser.

player.setCurrentTime(30.456).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

