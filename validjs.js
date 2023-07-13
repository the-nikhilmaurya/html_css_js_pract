// this is going to validate my login credetials
function validateForm(){
    var email = document.forms['myform']['email'].value;
    var password = document.forms['myform']['password'].value;
    emailvalid(email)
    passwordvalid(password);
    if((emailvalid(email) == true) &&( passwordvalid(password)) == true){
        return true;
    }
    else{
        return false;
    }

    
}

function emailvalid(email){
    hidagain();
    if (email == ''){
        document.getElementById('input-email').hidden = false;
        return console.log("input email");
    }
    else if(email != "hello@gmail.com"){
        document.getElementById('invalid-email').hidden = false;
        return console.log("invalid email");
    }else{
        return true;
    }
}

function passwordvalid(password){
    hidagain();
    if(password == ''){
        document.getElementById('input-password').hidden = false;
        return console.log("input password");
    }
    else if(password != '123'){
        document.getElementById('invalid-password').hidden = false;
        return console.log("invalid password");
    }
    else{
        return true;
    }
}


document.getElementById('input-email').hidden = true;
document.getElementById('invalid-email').hidden = true;
document.getElementById('input-password').hidden = true;
document.getElementById('invalid-password').hidden = true;

function hidagain(){
    document.getElementById('input-email').hidden = true;
document.getElementById('invalid-email').hidden = true;
document.getElementById('input-password').hidden = true;
document.getElementById('invalid-password').hidden = true;

}