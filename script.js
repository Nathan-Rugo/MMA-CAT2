const video = document.getElementById('wildlife-video');
const button = document.getElementById('toggle-btn');

button.addEventListener('click', () => {
    // Check if the video element is currently hidden
    if (video.style.display === 'none') {
        // If hidden, show it and play it
        video.style.display = 'block';
        video.play();
        button.textContent = 'Hide Video';
    } else {
        // If visible, check if it's currently paused
        if (video.paused) {
            // Play it if it is not playing already
            video.play();
            button.textContent = 'Hide Video';
        } else {
            // If it is already playing, pause it and hide the video
            video.pause();
            video.style.display = 'none';
            button.textContent = 'Show & Play Video';
        }
    }
});
