function validateIt(){
    var res = false;
// var usrname = document.forms["meraForm"].elements["Username"].value;
    var usrName = document.meraForm.Username.value;
    var email = document.meraForm.Email.value;
    var contact = document.meraForm.number.value;
    var pass = document.meraForm.password.value;
    var cPass = document.meraForm.cpassword.value;
// alert("till here");
if(usrName.length > 0){
    console.log("length pass");
    if(contact.length == 10){
        if(pass.length > 8 ){
            if(pass == cPass) {
                alert("Form submitted successfully");
                res = true;
            } else {
                alert("The Password does not match with confirm password");
            }
        } else {
            alert("The password length should be greater than 8");
        }
    } else {
        alert("Mobile number length should be equal to 10");
    }
} else {
    alert("You cannot leave User Name empty");
}
return res;
}