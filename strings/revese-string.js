// Reverse a String
// use split method to break up string to an array of strings
// use reverse to revers that array of strings
// use join to make it back to string again.
const reverseString = str => {
  return str.split('').reverse().join('');
}

const str1 = reverseString('hello');
const str2 = reverseString('I want to live');
const str3 = reverseString('Mark Marchant');
const str4 = reverseString('Love is a wonderful thing 2');

// Testing
console.log(str1); // olleh
console.log(str2); // olleh
console.log(str3); // olleh
console.log(str4); // olleh