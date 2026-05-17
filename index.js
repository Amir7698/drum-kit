

let sounds = [
    "sounds/Crash.wav",
    "sounds/Ride.wav",
    "sounds/Tom2.wav",
    "sounds/Tom1.wav",
    "sounds/Clap.wav",
    "sounds/Openhat.wav",
    "sounds/Kick.wav",
    "sounds/Hihat.wav",
    "sounds/Snare.wav",
];

let keys = ["Q","W","E","A","S","D","Z","X","C"]


let pads = document.querySelectorAll(".pad")
pads.forEach(function(pad, index) {
    pad.addEventListener("click", function() {

        new Audio(sounds[index]).play();

        let soundText = pad.querySelector(".sound");

        // soundText.classList.add("pad-click");
        pad.classList.add("pad-active");

        setTimeout(() => {
            // soundText.classList.remove("pad-click");
            pad.classList.remove("pad-active");
        }, 200);
    });
});


function myFunction (event) {
    // alert(event.key)
        let keyPressed = event.key.toUpperCase();
        let index = keys.indexOf(keyPressed);

    if (index !== -1) {
        new Audio(sounds[index]).play();
        let pad = document.querySelectorAll(".pad")[index]
        pad.classList.add("pad-active")
        setTimeout(() => {
          pad.classList.remove("pad-active")   
        }, 200);
    }
}

