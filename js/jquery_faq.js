"use strict";

$('dd').addClass('invisible');

$('#FAQ-Toggle').click(function() {
    $('dd').toggleClass('invisible');
});

$('dt').each(function(index) {
    $(this).click(function() {
        $(this).toggleClass('highlight');
    })
});
