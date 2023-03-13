"use strict";

/**
 * DONE:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

/*
function sayHello(name) {
    return("Hello " + name);
}
console.log()
*/

/**
 * DONE:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

/*
var userName = prompt('What is your name?');
console.log(userName);
var helloMessage = sayHello(userName)
console.log()
*/

/**
 * DONE:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

/*
var myName = "Ben";
sayHello(myName);
console.log(myName);
*/

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random

var random = Math.floor((Math.random() * 3) + 1);

/**
 * DONEEEEE:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

/*

function isTwo(someNumber){
    return someNumber ===2;
}
console.log(isTwo);

isTwo(random)
console.log()
*/

/**
 * DONEDONE:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
/**
 * DUNDUNDUNNNNNNNNNNNN:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

/*
function calculateTip(tip){
    var billTotal = prompt("What is your total bill?");
    var tipPercent = prompt("What percentage would you like to tip?");
    console.log(billTotal);
    console.log(tipPercent);
    var tipConv = (tipPercent / 100)
    var tip = (billTotal * tipConv);
    alert("You should tip $" + tip);
}
console.log(calculateTip());
*/

/**
 * DONE:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

/*
function applyDiscount(discPrice){
    var origPrice = prompt("What is the original price?");
    var discPerc = prompt("What is the discount percent?");
    console.log(origPrice);
    console.log(discPerc);
    var discConv = (discPerc / 100);
    var discAmount = (origPrice * discConv);
    var discPrice = (origPrice - discAmount);
    alert("Your new total comes out to be $" + discPrice);
}
console.log(applyDiscount());
*/

/**Example
/*
function timesThreeNum(numOne, numTwo, numThree){
    var multiplied = numOne * numTwo * numThree
    alert("Your numbers multiplied together equals " + multiplied);
}
console.log(timesThreeNum(1, 2, 3));
*/


