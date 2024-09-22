// Optional: Add any necessary interactivity
const audio = document.querySelector('audio');
document.querySelector('#audio h2').addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});
