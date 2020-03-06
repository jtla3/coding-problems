// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// used debugger to test

// Solution 1 with helpers
// split('') - turn string into an array of strings
// reverse() - reverses the array
// join('') - joins the array back to string
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// // Solution 2 using a decremented for loop
// const reverse = str => {
//   // create empty string to store reversed characters
//   let newString = "";
//   // loop through string input from end till it i > = 0
//   for (let i = str.length - 1; i >= 0; i--){
//     // add characters to newString variable
//     newString += str[i];
//   }
//   // return newString
//   return newString
// }

// Solution 3 with for of loop
// function reverse(str) {
//   // created empty string to store backwards characters
//   let reversed = "";
//   // loop backward through str input and add it to reversed string
//   for (let character of str) {
//     reversed = character + reversed;
//   }
// return reversed string
//   return reversed;
// }

//Solution 4 with array helpers - split(), reduce()
// reduce - reduce characters into array down to 1
// function reverse(str) {
//   return str.split('').reduce((reversed, character) =>
//     character + reversed
//   , '');
// }

//Solution 5 with recursion
// make function call of reverse till we reach base case of empty string
// function reverse(str) {
//   // base case
//   if (str === '') {
//     return str
//   } else {
//     // recursively call the function
//     return reverse(str.substr(1)) + str[0];
//   }
// }

// Solution 6 with recursion - used ternary operator to make it more clean
// function reverse(str) {
//   return str ? reverse(str.substr(1)) + str[0] : str;
// }

// Solution 7 with ES6 - spread operator
// [...] spread operator turns str input into an array of strings
// function reverse(str) {
//   [...str].reverse().join('');
// }

reverse("batman");
