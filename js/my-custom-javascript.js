'use strict'
//$(function() {
//    alert( 'The DOM has finished loading!' );
//});

$('h1').click(function() {
    $(this).css('background-color', '#FF0');
});
$('p').dblclick(function() {
    $(this).css('font-size', 18);
});
$('li').hover(function() {
        $(this).css('background-color', '#F00');
    }, function() {
        $(this).css('background-color', '#000');
});