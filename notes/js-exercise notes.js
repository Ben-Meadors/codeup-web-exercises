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
    if (password = username){
        return false
    }
    else{
        return true
    }
}

function userLength(username){
    if (username.length < 21){
        return true
    }
    else{
        return false
    }
}

function whiteSpaceCheck()