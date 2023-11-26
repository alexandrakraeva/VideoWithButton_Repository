document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('Cartoon');
    const playButton = document.getElementById('playButton');
    const playButtonContainer = document.getElementById('playButtonContainer');

    playButton.addEventListener('click', () => {
        video.style.display = 'block'; // Show the video
        playButtonContainer.style.display = 'none'; // Hide the play button
        video.play();
    });

    video.addEventListener('loadedmetadata', () => {
        // Optionally, do something when video metadata is loaded
    });

    video.onended = function () {
        // Optional: Redirect or perform an action after the video ends
    };
});
