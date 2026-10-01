const music = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

let playing = false;

function toggleMusic() {

    if (playing) {

        music.pause();

        musicButton.innerHTML = "🎵";

        musicButton.classList.remove("playing");

        playing = false;

    } else {

        music.play();

        musicButton.innerHTML = "⏸️";

        musicButton.classList.add("playing");

        playing = true;

    }
}