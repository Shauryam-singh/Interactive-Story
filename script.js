document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('fire-sound');
    audio.play().catch(function(error) {
        console.log('Autoplay was prevented:', error);
    });
});