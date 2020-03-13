// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Solution 1 - nested for loops
// run time is O(n^2)

// function steps(n) {
//   // loop through the rows
//   for (let row = 0; row < n; row++) {
//     // create empty string for each iteration
//     let stair = "";
//     // loop through columns
//     for (let column = 0; column < n; column++) {
//       // check if current column less than or equal to current row
//       if (column <= row) {
//         // # to stair string
//         stair += "#";
//       } else {
//         // if they are not equl then add space to stair string
//         stair += " ";
//       }
//     }
//     //print out the stair
//     console.log(stair);
//   }
// }

// Solution 2 - Recursion
function steps(n, row = 0, stair = "") {
  // base case handles the case when we handled all our work
  if (n === row) {
    return;
  }
  // handles the case that we hit the end of the row
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }
  // handles stairs length is less than or equal to the row
  if (stair.length <= row) {
    // add # onto the stair
    stair += "#";
  } else {
    // add space onto stair
    stair += " ";
  }
  // call steps and pass in n, row, stair
  steps(n, row, stair);
}
