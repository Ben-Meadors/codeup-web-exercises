"use strict";

$('dd').addClass('invisible');

$('.invisible').css('visibility', 'hidden');



$('#FAQ-Toggle').click(function(event) {
    event.preventDefault();
    $('dd').toggleClass('invisible');
});

