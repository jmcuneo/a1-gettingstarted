function playVideo(){
    const video = document.getElementById('video');
    video.style.display = 'block';
    video.play();
    video.addEventListener('ended', function() {
        video.style.display = 'none';
    });
}