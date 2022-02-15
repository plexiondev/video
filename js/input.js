// get file input


let picker = document.getElementById("video-picker");
let player = document.getElementById("player");

document.body.setAttribute("playing","false");

// on file
picker.onchange = function(event) {
    var file = picker.files;
    console.log(`Loading file input... (${file[0].name})`);

    // return
    const src = URL.createObjectURL(file[0]);
    player.setAttribute("src",`${src}`);

    // set state
    document.body.setAttribute("playing","true");
}