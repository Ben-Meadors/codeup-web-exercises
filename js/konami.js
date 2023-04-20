'use strict'

$(document).keyup(function(event){
    console.log(event.keyCode);
});

(function ($) {
    $.extend({
        playSound: function () {
            return $(
                '<audio class="sound-player" autoplay="autoplay" style="display:none;">'
                + '<source src="' + arguments[0] + '" />'
                + '<embed src="' + arguments[0] + '" hidden="true" autostart="true" loop="false"/>'
                + '</audio>'
            ).appendTo('body');
        },
        stopSound: function () {
            $(".sound-player").remove();
        }
    });
})(jQuery);


var initial = 0;
var userInput = '';
$(document).keyup(function(event){
    userInput += event.keyCode
    if (userInput.indexOf('65777779') !== -1 && initial < 1){
        $('body').css('background', '#ddd url("../assets/san-andreas.avif")');
        $.playSound('../audio/here-we-go-again.mp3');
        initial++;
    }
});

$('.fade-no').click(function() {
    $('body').css('background', '#ddd url("../assets/static-tv-static.gif")');
    alert('Did you think this was a joke?');
    $.playSound('../audio/dial-up-modem-01.mp3');
});










