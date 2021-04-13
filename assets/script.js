// Assignment Code

var lowletters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upletters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialchar = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '?', '@', '[', '\\', ']', '^', '_', '`','{','|','}', '~'];
var test = ['null'];
var test2 = ['null'];

// console.log(specialchar);
// console.log(lowletters);
// console.log(upletters);
// console.log(numeric);

var generateBtn = document.querySelector('#generate');
// function examplePassword() {
//   return retVal;
// }
// Write password to the #password input
function writePassword() {
  // console.log('before window opens');
  // var test = [];
   length = prompt("How long do you want your password to be");
  console.log('password length is ' + length);
  if (length < 8 || length >= 129) { 
    alert('Password must be between 8 and 128 characters');
    console.log('password incorect');
    location.reload();
  } else if (length > 7 || length < 129) {
    console.log('password is correct')
    console.log('Before first prompt');  
    lowlettersfx();
    uplettersfx();
    numericfx();
    specialcharfx();
    shift();
    var password = examplePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
  }
}
  
  

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


// var length = 8;
function examplePassword() {
      retVal = "";
      console.log(length);
      // var test = numeric;
  for (var i = 0; i < length; ++i) {
      retVal += test[Math.floor(test.length * Math.random())];
  }
  console.log(retVal)
  console.log(test.length)
  return retVal;
  
  
}
// examplePassword();

function alertcheck() {
  alert('oh noes!!');
}
function lowlettersfx() {  
  var r = confirm('Password to contain lower case alphabet?')
  if (r == true) { 
    test = test2.concat(lowletters);
    console.log(test);
    console.log(length);    
  }
}
function uplettersfx() {  
  var r = confirm('Password to contain upper case alphabet?')
  if (r == true) { 
    test = test2.concat(test,upletters);
    console.log(test);    
  }
}
function numericfx() {  
  var r = confirm('Password to contain numeric characters?')
  if (r == true) { 
    test = test2.concat(test,numeric,numeric,numeric);
    console.log(test);    
  }
}
function specialcharfx() {  
  var r = confirm('Password to contain special characters?')
  if (r == true) { 
    test = test2.concat(test,specialchar);
    console.log(test);    
  }
}

function shift() {
  if (test[0]=='null') {
    test.shift();
    shift();
  }}
    
  




// specialcharfx();
// console.log(test2);
// alertcheck();



