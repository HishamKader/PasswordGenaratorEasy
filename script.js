// var specialChar = ["!", "@","#","$","%","^","&","*","-","_","=","+"];
// var upperCase = ["A","B","C","D","E","F","G",];
// var lowerCase = [];
// var numeric = [];

// function password() {
//     var passLength = prompt("How long do you want your password");

//     if (isNaN(passLength) === true) {
//         alert("This is not a number");
//         return;
//     }

//     if (passLength < 8 && passLength > 128) {
//         alert("Atleast 8 to 128 characters in the password");
//         return;
//     }

//     var specialCharacters = confirm("Must contain special characters");
//     var upperCaseChar = confirm("")
//     var lowerCaseChar = confirm("")
//     var numericChar = confirm("")

//     if (specialCharacters === false && upperCaseChar === false && lowerCaseChar === false && numericChar === false) {
//         alert("Must select at least one character type")
//         return;
//     }


// }
//generate random password
function generate(){

    //set password length/complexity
    let complexity = document.getElementById("slider").value;

    //possible password values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

    


}









