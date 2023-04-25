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

$('.ol-clicker').click(function() {
    $('ul').each(function(){
        $(this).children().last().toggleClass('highlight');
    })
});

$('h3').click(function() {
    $(this).next().children().toggleClass('bold');
});

$('li').click(function() {
    $(this).parent().children().first().toggleClass('blue');
});
