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
    document.getElementById("lastNums").innerHTML

}

// set defualt length display of 25
document.getElementById("length").innerHTML = "length: 8";

// function to set length based on slider position
document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value >0){
        document.getElementById("length").innerHTML = "length: " + document.getElementById("slider").value;
    }


}






