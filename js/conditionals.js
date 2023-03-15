"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

//without alerts
/*
function analyzeColor(someColor){
    if (someColor === "cyan"){
        console.log(("Cyan is such a pretty color!"));
    } else if (someColor === "red"){
        console.log(("Red is kinda okay"));
    } else if (someColor === "green"){
        console.log(("Did you know grass is green?"));
    } else console.log(("I don't think I know that color.."));
}
*/

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

/*
analyzeColor(randomColor);
console.log(randomColor);
*/

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

/*
function analyzeColor(someColor){
    switch(someColor) {
        case "cyan":
            console.log(("Cyan is such a pretty color!"));
            break;
        case "red":
            console.log(("Red is kinda okay.."));
            break;
        case "green":
            console.log(("Did you know grass is green?"));
            break;
        default:
            console.log(("I don't think I know that color.."));
            break;
    }
}
*/

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */


/*
var userColor = prompt("Pick a random color");
*/

//with alerts
/*
function analyzeColor(someColor){
    if (someColor === "cyan"){
        alert("Cyan is such a pretty color!");
    } else if (someColor === "red"){
        alert("Red is kinda okay");
    } else if (someColor === "green"){
        alert("Did you know grass is green?");
    } else alert("I don't think I know that color..");
}
analyzeColor(userColor);
*/

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

//calculate total function
    //
/*
var numbers = [0, 1, 2, 3, 4, 5];
var luckyNumbers = numbers[Math.floor(Math.random() * numbers.length)];
console.log(luckyNumbers);
*/

/*
function calculateTotal(){
    if (luckyNumbers === 0) {
        console.log(total - (total * 0));
    } else if (luckyNumbers === 1) {
        console.log(total - (total * .1));
    } else if (luckyNumbers === 2) {
        console.log(total - (total * .25));
    } else if (luckyNumbers === 3) {
        console.log(total - (total * .35));
    } else if (luckyNumbers === 4) {
        console.log(total - (total * .5));
    } else if (luckyNumbers === 5) {
        console.log(total - (total * 1));
    }
}
*/
/*
function calculateTotal(num, total) {
    switch(num) {
        case 0:
            return total
        case 1:
            return total -= total * .1
        case 2:
            return total -= total * .25
        case 3:
            return total -= total * .35
        case 4:
            return total -= total * .5
        case 5:
            return total -= total * 1
    }
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
/*
var luckyNumber = Math.floor(Math.random() * 6);
var total = prompt("What is the total price?");
alert("Your lucky number was " + luckyNumber + "!");
alert("Your original price was $" + total + "." + " Your new total is $" + calculateTotal(luckyNumber, total));
*/

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 *
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

function isEven(yourNumber){
    if (yourNumber % 2 == 0) {
        alert("Your number is even!");
    }else {
        alert("Your number is odd!")
    }
}
function plusOneHundred(yourNumber){
    return (yourNumber) + 100;
}
function  isPositive(yourNumber){
    if (yourNumber >= 0) {
        alert("Your number is positive!");
    }else alert("Your number is negative!");
}
function notNumber(yourNumber) {
    if (isNaN(yourNumber)) {
        alert("Could you please enter a real number");
    }
}

switch (confirm("Would you like to enter a number?")){
    case true:
        var yourNumber = +prompt("PLEASE ENTER A NUMBER");
        isEven(yourNumber);
        isPositive(yourNumber);
        alert("Your number plus one hundred is " + plusOneHundred(yourNumber));
        break;
    default:
        alert("Too bad you didn't enter a number dummy, now you'll never know what could have happened..")
}


/*
function weatherFit(degrees) {
    if (degrees < 50) {
        console.log(("Stay home"));
    } else if (degrees >= 50 && degrees <= 70) {
        console.log(("Bring a sweater"));
    } else {
        console.log(("Bring some sunglasses"));
    }
}
*/
/*
var pass = "theSecretPassword";
var userGuess = prompt("guess the password dummy");

if (userGuess === pass){
    alert("you got it wow good job");
} else {
    alert("man you suck, better keep guessing LOL");
}
*/

