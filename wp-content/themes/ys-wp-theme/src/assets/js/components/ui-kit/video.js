$(document).ready(function () {
    $('.main-video-control_pause').click(function () {
        $('#video').trigger('pause')
        $(this).removeClass('active')
        $('.main-video-control_play').addClass('active')
    })

    $('.main-video-control_play').click(function () {
        $('#video').trigger('play')
        $(this).removeClass('active')
        $('.main-video-control_pause').addClass('active')
    })
})