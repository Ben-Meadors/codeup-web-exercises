'use strict'

/*
for (var i = 1; i < 50; i++){
    var userNum = prompt('Please enter an odd number')
    if(userNum % 2 !==0){
        alert('Please enter an actual odd number')
        break;
    }
}
*/
/*
for (let i = 1; i < 50; i++) {
    var userNumber = prompt('Please enter an odd number');
    while (i < 50){
    if (userNumber % 2 === 0){
        prompt('Please do not enter an even number')
    break;}
    }
}
*/

/*
for(let i = 1; i < 50; i++) {
    var userNumber = prompt('Please put in a number')
    {
        while (i < 50) {
            if (userNumber % 2 === 0) {
                break;
            }
            i += 1;
        }
    }
}
*/

var userNumber = prompt('Please enter an odd number between 1 and 50')
function isValidInput(userInput) {
    if (userInput === undefined) {
        return false
    }
    if(isNaN(userInput)) {
        return false
    }
    if (userInput % 2 == 0) {
        return false
    }
    if (userInput > 50 || userInput < 1) {
        return false
    }
    return true
}
while(true) {
    var isValid = isValidInput(userNumber)
    if (isValid) {
        break
    }
    userNumber = prompt('Invalid! Please enter an odd number between 1 and 50')
}
console.log(`Number to skip is: ${userNumber}`)
for (i = 1; i < 50; i++) {
    if (i == userNumber) {
        continue
    }
    if (i % 2 == 1){
        console.log(`Here is an odd number: ${i}`)
    }
}


