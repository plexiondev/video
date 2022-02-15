// get file input


let picker = document.getElementById("video-picker");
let video = document.getElementById("player");

document.body.setAttribute("playing","false");

// on file
picker.onchange = function(event) {
    var file = picker.files;
    console.log(file[0]);

    // return
    const src = URL.createObjectURL(file[0]);
    console.log(src);
    video.setAttribute("src",`${src}`);

    // set state
    document.body.setAttribute("playing","true");
}