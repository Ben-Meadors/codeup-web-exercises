"use strict";

//Exercise 3: Data Types, Operators, Variables

    var scheduleConflict = false;
    var classFull = true;
    var enrollPossible = (scheduleConflict && classFull);

    var productPromo = (twoPlusItems && offerValid) || (isPremium && offerValid)
    var twoPlusItems = true
    var offerValid = true
    var isPremium = false

//Exercise 4: Creating variables for user/pass for certain parameters

var username = 'codeup'
var password = 'notastrongpassword'
function passLength(password){
    if (password.length > 4){
        return true
    }
    else{
        return false
    }
}
function passNotUser(password){
    if (password === username){
        return false
    }
    else{
        return true
    }
}
function userlength(username){
    if (username.length < 21){
        return true
    }
    else{
        return false
    }
}
function whiteSpace(username, password){
    if (username.charAt(0) !== ' ' && username.charAt(username.length-1) !== ' '
        && password.charAt(0) !== ' ' && password.charAt(pasword.length-1) !== ' '){
        return true
    }
    else{
        return false
    }
}
var minChar = password.length >= 5;
var passUserSame = password.includes(username);
var maxChar = username.length <= 20;
var whiteSpace = username.length === username.trim().length && password.length === password.trim().length;


/*
describe("strLength", function(){
    it("should be defined function", function(){
        expect(typeof strLength).toBe("function");
    });
    it("should return string length when passed string", function(){
        expect(typeof strLength("words")).toBe("number");
        expect(typeof strLength("oh")).toBe("number");
        expect(typeof strLength("expectations")).toBe("number");
    });
    it("should be string", function(){
        expect(typeof strLength(7)).toBe(false);
    });
});
*/
/*
for (var i = 0; i <= 10; i++){
    if (i % 2 !== 0){
        continue;
    }
    console.log(i + " is an even number");
}
*/

