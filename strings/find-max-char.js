// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // create empty map
  const map = {};
  // create variable to keep the count
  let max = 0;
  // create variable to to store maxChar and set it to an empty string
  let maxChar = "";
  // loop through the string input
  for (let char of str) {
    // if character is not in the map
    if (!map[char]) {
      map[char] = 1;
    } else {
      // add char to map
      map[char]++;
    }
  }
  // loop through an object with for in
  for (let char in map) {
    // if char in map greater then max
    if (map[char] > max) {
      // increase count of max to that character
      max = map[char];
      // set maxChar to that char
      maxChar = char;
    }
  }
  // return
  return maxChar;
}
