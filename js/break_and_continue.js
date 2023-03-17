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

var userNumber = prompt('Please enter an odd number')
for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i + " is odd");
        continue;
    } else if (i === userNumber){
        console.log('skipping ' + userNumber);
    } else{
        break;
    }
}
