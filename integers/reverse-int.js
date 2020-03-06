// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // created variable to store reversed number and set it to n
  let reversed = n
    // turns integer to string
    .toString()
    // turns the string into an array of strings
    .split("")
    // reverses the array of strings
    .reverse()
    // joins it back together
    .join("");
  // parseInt turns string into a number
  // Math.sign() check if n > 0 or less then zero to determine if n is positive or negative
  return parseInt(reversed) * Math.sign(n);
}

reverseInt(234);
reverseInt(5100);
reverseInt(-234);
