$(function(){
    window.addEventListener('message', function(event) {
        switch (event.data.action) {
            case 'notification':
                Notification(event.data.message, event.data.duration);
            break;

            case 'checkRadar':
                if (event.data.map == true) {
                    $('.container').removeClass('mapOff').addClass('mapOn');
                } else {
                    $('.container').removeClass('mapOn').addClass('mapOff');
                }
            break;
        }
    })
})

function Notification(message, duration) {
    var id = $('.container .notify').length;

    $('.container').append(`
        <div class="notify" id="notify-${id}">
            <h1>${message}</h1>
        </div>
    `)

    var current = $(`#notify-${id}`);
    var width = 100;
    var id = setInterval(frame, duration / 100);

    function frame() {
        if (width <= 0) {
            clearInterval(id);

            current.css({'animation': 'fadeIn .5s ease 0s 1 normal forwards'})
            current.fadeIn(250)

            current.css({'animation': 'fadeOut .7s ease 0s 1 normal forwards'})
            current.fadeOut(250)
        } else {
            width--;
        }
    }
}