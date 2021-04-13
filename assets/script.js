// Assignment Code

var lowletters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upletters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialchar = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '?', '@', '[', '\\', ']', '^', '_', '`','{','|','}', '~'];

console.log(specialchar);
console.log(lowletters);
console.log(upletters);
console.log(numeric);

var generateBtn = document.querySelector('#generate');
function generatePassword() {
  return 'yourpassword';
}
// Write password to the #password input
function writePassword() {
  console.log('writing password');
  var password = examplePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

test = lowletters.concat(upletters,numeric,specialchar,numeric,numeric);

var length = 8;
function examplePassword() {
      retVal = "";
  for (var i = 0; i < length; ++i) {
      retVal += test[Math.floor(test.length * Math.random())];
  }
  console.log(retVal)
  console.log(test.length)
  return retVal;
  
}
examplePassword();




