

/*
var waterBottle = {
    make: "yeti",
    color: "silver",
    size: "big"
}

console.log(waterBottle);

console.log("My water bottle manufacturer is: " + waterBottle.make);

 */
/*
var school = new Object();

school.name = "codeup";
school.locations = ['san antonio', 'dallas', 'remote'];
school.numStudents = 500;
console.log(school);
 */

(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    /*
    var person = {}
    person.firstName = "Ben";
    person.lastName = "Meadors";
     */

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    /*
    function sayHello(name){
        console.log("Hello from " + person.firstName + " " +person.lastName);
    }
    sayHello();
*/
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    const cameronTotal = 180;
    const ryanTotal = 250;
    const georgeTotal = 320;
function discount(personTotal){
    if (personTotal > 200){
        console.log("Your total before the discount was " + personTotal + ". Your new amount owed is: " + (personTotal - (personTotal * .12)));
        } else if (personTotal < 200){
        console.log("Your total is: " + personTotal + ". No discount for you!");
    }
}
discount(cameronTotal);
discount(ryanTotal);
discount(georgeTotal);
     var shoppers = [
         {name: 'Cameron', amount: 180},
         {name: 'Ryan', amount: 250},
         {name: 'George', amount: 320}
     ];

    shoppers.forEach((person) => {
        console.log(person);
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {title: "Cat in the Hat", author: {
            firstName: "Dr.",
                lastName: "Seuss"
            }},
        {title: "Art of War", author: {
                firstName: "Sun",
                lastName: "Tzu"
            }},
        {title: "To Kill a Mockingbird", author: {
                firstName: "Harper",
                lastName: "Lee"
            }},
        {title: "Grapes of Wrath", author: {
                firstName: "John",
                lastName: "Steinbeck"
            }},
        {title: "Ulysses", author: {
                firstName: "James",
                lastName: "Joyce"
            }}
    ]
    //console.log(books[1].title)
    //console.log(books[1].author.firstName)
    //console.log(books[1].author.lastName)

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();
