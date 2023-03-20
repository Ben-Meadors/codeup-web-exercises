'use strict'

/*
function showMultiplicationTable(userNumber){
    for(let i = 1; i <= 10; i++) {
        const result = i * userNumber;
        console.log(`${userNumber} * ${i} = ${result}`);
    }
}
console.log(showMultiplicationTable(7));



for (let i = 0; i < 10; i++) {
    var count = 0;
    var randomNumber = Math.floor(Math.random() * 200) + 20;
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " is even");
    } else {
        console.log(randomNumber + " is odd");
        count;
    }
}


let rows = 9;
let pattern = "";
for (let n = 1; n <= rows; n++) {
    for (let num = 1; num <= n; num++) {
        pattern += n;
    }
    pattern += "\n";
}
console.log(pattern);



var b = 100;
while (b > 0) {
    console.log(b);
    b -= 5;
}


//Lola example

/*
for (var i = 1; i < 10; i++) {
    var bucket = "";
    for (var k = 0; k < i; k++) {
        bucket += i;
    }
    console.log(bucket);
}
*/
/** INSTRUCTOR EXAMPLED **/

for(let i = 0; i < 10; i++){
    var tenGen = Math.floor(Math.random() * 180) + 20;
    if (tenGen % 2 === 0) {
        console.log(tenGen + " is even");
    } else{
        console.log(tenGen + " is odd");
    }
}

for(let i = 0; i < 10; i++){
    var str = ""; //"" ""
    //nested
    for(let j = 0; j < i; j++){
        str = str + i; //"1" "22"
    }
    console.log(str); //"" - "1" - "22"
}

for(let i = 0; i < 10; i++){
    console.log(i.toString().repeat(i)); // 1 -> "1", 2 -> "22"
}

for(var i = 100; i >= 5; i -= 5){
    console.log(i);
}


