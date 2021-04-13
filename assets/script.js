// Assignment Code
//Arrays of possible password combinators. test and test2 were used as placeholders. I probably should have named them better
var lowletters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upletters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialchar = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '?', '@', '[', '\\', ']', '^', '_', '`','{','|','}', '~'];
var test = ['null'];
var test2 = ['null'];
//starter code provided by Noah
var generateBtn = document.querySelector('#generate'); 

//The function to find out through prompt/confirmation windows for the User to decide on the variable 'length' also select which arrays to include in the random generation
function writePassword() {
   length = prompt("How long do you want your password to be");
  if (length < 8 || length >= 129) { 
    alert('Password must be between 8 and 128 characters');
    location.reload();
  } else if (length > 7 || length < 129) {
    lowlettersfx();
    uplettersfx();
    numericfx();
    specialcharfx();
    shift();
    var password = examplePassword(); //Part of the starter code from Noah
  var passwordText = document.querySelector('#password'); //Part of the starter Code from Noah
  passwordText.value = password; // Part of the starter code from Noah
  }
}
// Add event listener to generate button also starter code provided by Noah
generateBtn.addEventListener('click', writePassword);

//This is the function that gives the password from the conditions provided by writepassword(). It randomly selects values from the array test and adds them as increments.
function examplePassword() {
      retVal = "";
      console.log(length);
  for (var i = 0; i < length; ++i) {
      retVal += test[Math.floor(test.length * Math.random())];
  }
  return retVal; 
  }
  //Function if they select ok, the array lowletters will be added to test array
function lowlettersfx() {  
  var r = confirm('Password to contain lower case alphabet?')
  if (r == true) { 
    test = test2.concat(lowletters);
    console.log(test);
    console.log(length);    
  }
}
//Function if they select ok, the array upletters will be added to the test array
function uplettersfx() {  
  var r = confirm('Password to contain upper case alphabet?')
  if (r == true) { 
    test = test2.concat(test,upletters);
    console.log(test);    
  }
}
//Function if they select ok, the array numeric is added 3 times to the test array. I added numeric 3 times, because the numeric array is much smaller
//than the other two. Alphabet = 26, and special = 32. 3x10 = 30, so it is now approximately evenly weighted. Alternatively, I could have just
//made the array in triplicate up top, but this seemed 'drier'.
function numericfx() {  
  var r = confirm('Password to contain numeric characters?')
  if (r == true) { 
    test = test2.concat(test,numeric,numeric,numeric);
    console.log(test);    
  }
}
//Function for special characters. If the user clicks ok, the specialchar array is added to test array.
function specialcharfx() {  
  var r = confirm('Password to contain special characters?')
  if (r == true) { 
    test = test2.concat(test,specialchar);
    console.log(test);    
  }
}
//So, because I gave test and test2 an inital set up of = 'null', the number of nulls was equal to 
// the number of 'ok' selected by the confirmation windows. When I checked the console.log(test)
//throughout, the nulls were always at the front. This just checks to see if null is at the front
//and if so, it removes it. I tried to do a for statement, but I kept messing it up. This is probably
// not the best, because it doesn't have an end condition, but it worked.
function shift() {
  if (test[0]=='null') {
    test.shift();
    shift();
  }}