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

    // add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br />"

}

// set defualt length display of 68
document.getElementById("length").innerHTML = "length: 68";

// function to set length based on slider position
document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value >0){
        document.getElementById("length").innerHTML = "length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Lenght: 8"
    }


}

// function to copy password to clipboard
function copyPassword(){

    document.getElementById("display").querySelector();

    document.execCommand("Copy")

    alert("Password copied to clipboard!")
}



