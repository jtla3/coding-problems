// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// // Solution 1: Using for of loop and array methods
// function capitalize(str) {
//   // make an empty array to store capital words
//   const words = [];
//   // loop through str input and split it into an array of words
//   for (let word of str.split(" ")) {
//     // take first character of every word and upperCase it
//     // use the + sign to join/concatnate it with slice method at index 1 plus everything else
//     // we push everything above to empty words array
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//   // return result of words array joined with spaced words
//   return words.join(" ")
// }

function capitalize(str) {
  // create and empty string called result and set first character to upperCase
  let results = str[0].toUpperCase();
  // loop through each character in str input
  // start at first index
  for (let i = 1; i < str.length; i++) {
    // if the thing to left of the current character is a space then
    if (str[i - 1] === " ") {
      // take current character that your looking at and upperCase it and add it on to results string
      results += str[i].toUpperCase();
    } else {
      // if the character to the left of the current character is not a space
      // then add it on to results string
      results += str[i];
    }
  }
  // return results string
  return results;
}
