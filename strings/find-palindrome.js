// Find Palindrome
// Given a string, find palindrom and return true is found palindrome
// return false if it's not

// Example of palindrom is:
// racecar = racecar -> true
// abba = abba -> true
// football = llabtoof -> false
// mark = kram -> false

const findPalindrome = str => {
  const reversedString = str.split('').reverse().join('');
  if (str === reversedString) {
    return true
  }
  return false
}

const str1 = findPalindrome(' racecar '); // true
const str2 = findPalindrome('mark'); // false
const str3 = findPalindrome('abba'); // true
const str4 = findPalindrome('Boston '); // false

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);