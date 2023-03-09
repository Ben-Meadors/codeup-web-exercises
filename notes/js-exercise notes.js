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
var minChar = password.length >= 5
var passUserSame = password.includes(username)
var maxChar = username.length <= 20
var whiteSpace = username.length === username.trim().length && password.length === password.trim().length