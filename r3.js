
function toggle(){

    var pigs = document.querySelector('.pigs')
    pigs.classList.toggle('active')
    var video = document.querySelector('video')
    video.pause();
    video.currentTime = 0;
}