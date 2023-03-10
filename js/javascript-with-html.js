"use strict";

//console.log("this is from js")

//alert("Whoa there, are you sure wanna continue?");

//var areYouSure = confirm("Are you absolutely sure you wish to continue?");

//console.log(areYouSure);

//var oldAge = prompt("what is your age?");

//console.log(oldAge);

var person1 = prompt("what's your name? ");
var personAge = Number(prompt("what's your age?"));
var clubAgeLimit = 21;
var canGetIn = false;
console.log(personAge)
canGetIn = personAge > clubAgeLimit;
console.log("can " + person1 + " get into the club: ", canGetIn);