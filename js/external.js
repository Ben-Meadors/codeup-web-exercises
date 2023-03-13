"use strict"

console.log("Hello from external JavaScript");

/*
alert("Welcome to my website!");
//var favColor = prompt("What is your favorite color?");
//console.log(favColor);
alert("That's great, " + favColor + " is my favorite too!");
*/

//Scenario 3/1

/*
var movieAmount = Number(prompt("How many movies did you get?"));
console.log(movieAmount);
var movieOne = Number(prompt("How many days will you be renting Little Mermaid?"));
var movieTwo = Number(prompt("How many days will you be renting Brother Bear?"));
var movieThree = Number(prompt("How many days will you be renting Hercules?"));
var moviePrice = 3;
console.log(movieOne, movieTwo, movieThree);
alert("Movies are $3 a day to rent, do you wish to continue?");
var movieTotal = (moviePrice * movieOne) + (moviePrice * movieTwo) + (moviePrice * movieThree)
console.log(movieTotal);
alert("Your total is $" + movieTotal);
*/

//Scenario 3/2

/*
var googleRate = 400;
var amazonRate = 380;
var facebookRate = 350;
var googleHours = Number(prompt("How many hours did you work this week at Google?"));
var amazonHours = Number(prompt("How many hours did you work this week at Amazon?"));
var facebookHours = Number(prompt("How many hours did you work this week at FaceBook?"));
console.log(googleHours, amazonHours, facebookHours);
var totalPay = (googleRate * googleHours) + (amazonRate * amazonHours) + (facebookRate * facebookHours);
console.log(totalPay);
alert("Your total pay this week is $" + totalPay);
*/

//Scenario 3/3

/*
var scheduleConflict = confirm("Does Monday to Friday, 8am to 4pm work for you?");
console.log(scheduleConflict);
var classFull = confirm("Are there still seats available in class?");
var enrollPossible = (scheduleConflict == true && classFull == true);
console.log(enrollPossible);
alert("Enrollment possible = " + enrollPossible);
*/

//Scenario 3/4

/*
var isPremium = confirm("Are you a premium member?");
var offerValid = confirm("Is the offer valid?");
var threeItems = confirm("Do you have three or more items?");
console.log(isPremium, threeItems, offerValid);
var productPromo = ((threeItems == true) && (offerValid == true)) || ((isPremium == true) && (offerValid == true));
console.log(productPromo);
alert("Promo is available: " + productPromo);
*/

