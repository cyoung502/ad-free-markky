function $(selector) {
    return document.querySelector(selector);
}

document.addEventListener("DOMContentLoaded", function () {
    var $video = $('div[data-player]');
    if ($video) {
        $video.style.width = '100%';
        $video.style.height = '100vh';
        var $body = $('body');
        $body.style.background = '#000';
        $body.innerHTML = '';
        $body.append($video);
    }
    setTimeout(function () {
        $('.at4-share').style.display = 'none';
    }, 500);
});