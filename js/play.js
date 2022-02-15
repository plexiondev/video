// check if playing


let time = document.getElementById("timestamp");
let full = document.getElementById("final-length");

// https://stackoverflow.com/questions/8599076/detect-if-html5-video-element-is-playing
Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function(){
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
})

// run in loop
setInterval(function() {
    if (player.playing) {
        document.body.setAttribute("ongoing","true");
    } else {
        document.body.setAttribute("ongoing","false");
    }
}, 0.1);

// play/pause
function play() {
    if (player.playing) {
        document.getElementById('player').pause();
    } else {
        document.getElementById('player').play();
    }
};

// timestamp
player.ontimeupdate = function() {time_update()};
function time_update() {

    // current time
    var current_time = new Date(null);
    current_time.setSeconds(player.currentTime);
    // calc
    if (player.currentTime < 3600) {
        current_time = current_time.toISOString().substr(14, 5);
    } else {
        current_time = current_time.toISOString().substr(11, 8);
    }

    // final time
    var final_time = new Date(null);
    final_time.setSeconds(player.duration);
    // calc
    if (player.currentTime < 3600) {
        final_time = final_time.toISOString().substr(14, 5);
    } else {
        final_time = final_time.toISOString().substr(11, 8);
    }

    time.textContent = `${current_time}`;
    full.textContent = `${final_time}`;
}

// exit
function exit() {
    player.setAttribute("src","");
    document.body.setAttribute("playing","false");
};