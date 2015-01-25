var container = $('.container');

$(document).scroll(function (e) {
    var scrollPosition = $(document).scrollTop();

    if (scrollPosition >= 1) {
        if ($(container))
            $(container).addClass('on-scroll');
    } else {
        $(container).removeClass('on-scroll');
    }
})
