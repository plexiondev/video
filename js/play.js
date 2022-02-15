// check if playing


// https://stackoverflow.com/questions/8599076/detect-if-html5-video-element-is-playing
Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function(){
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
})

// run in loop
setInterval(function() {
    if (document.getElementById("player").playing) {
        document.body.setAttribute("ongoing","true");
    } else {
        document.body.setAttribute("ongoing","false");
    }
}, 0.1);

function play() {
    if (document.getElementById("player").playing) {
        document.getElementById('player').pause();
    } else {
        document.getElementById('player').play();
    }
};