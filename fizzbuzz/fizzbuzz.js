// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  // loop through the n input
  for (let i = 1; i <= n; i++) {
    // if a multiple 3 & 5
    if (i % 15 === 0) {
      // print out fizzbuzz
      console.log("fizzbuzz");
      // if multiple of 3
    } else if (i % 3 === 0) {
      // print out fizz
      console.log("fizz");
      // if multiple of 5
    } else if (i % 5 === 0) {
      // print ouf buzz
      console.log("buzz");
    } else {
      // else print i
      console.log(i);
    }
  }
}
