
function playVideo(){
    const video = document.getElementById('video');
    video.style.display = 'block';
    video.volume = 0.5;
    video.play();
    video.addEventListener('ended', function() {
        video.style.display = 'none';
    });
}
