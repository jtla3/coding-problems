// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution 2 using helper function and array methods
function anagrams(stringA, stringB) {
  // we call helper function and pass in stringA and compare to stringB
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return (
    str
      // replace white spaces and punctuation
      .replace(/[^\w]/g, "")
      // change to lowercase
      .toLowerCase()
      // splits string to an array of strings
      .split("")
      // sorts array
      .sort()
      // joins array back to string
      .join("")
  );
}

// // Solution 1 using RegExp and helper function.
// function anagrams(stringA, stringB) {
//   // create two variables for character map by looping through stringA, and stringB
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//   // check is keys at aCharMap is the same length of bCharMap
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     // if they aren't the same length then return false
//     return false;
//   }
//   // loop through aCharMap
//   for (let char in aCharMap) {
//     // check is aCharMap and bCharMap are the same
//     if (aCharMap[char] !== bCharMap[char]) {
//       // if not then return false
//       return false;
//     }
//   }
//   // if string A and String B are anagrams then return true
//   return true;
// }

// // create helper function for character map
// function buildCharMap(str) {
//   const charMap = {};

//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }
