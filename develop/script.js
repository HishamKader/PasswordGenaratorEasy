var specialChar = ["!", "@","#","$","%","^","&","*","(",")","-","_","=","+"];
var upperCase = ["A","B","C","D","E","F","G",];
var lowerCase = [];
var numeric = [];

function password() {
    var passLength = prompt("How long do you want your password");

    if (isNaN(passLength) === true) {
        alert("This is not a number");
        return;
    }

    if (passLength < 8 && passLength > 128) {
        alert("Atleast 8 to 128 characters in the password");
        return;
    }

    var specialCharacters = confirm("Must contain special characters");
    var upperCaseChar = confirm("")
    var lowerCaseChar = confirm("")
    var numericChar = confirm("")

    if (specialChar === false && upperCase === false && lowerCase === false && numeric === false) {
        alert("Must select at least one character type")
        return;
    }


}