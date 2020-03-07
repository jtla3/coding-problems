// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Solution 2 using slice()
// slice()
function chunk(array, size) {
  // create empty chunked array
  const chunked = [];
  // created variable for index and start at 0
  let index = 0;
  // use a while loop run until index is greater then array.length
  while (index < array.length) {
    // push slice of length size from array in chunked array
    chunked.push(array.slice(index, index + size));
    // increase index by size
    index += size;
  }
  return chunked;
}

// // Solution 1 - using for of loop
// function chunk(array, size) {
//   // create an array to hold chunks
//   let chunkArr = [];
//   // loop through array input
//   for (let element of array) {
//     // create variable for last element in chunkArr
//     const lastElement = chunkArr[chunkArr.length - 1];
//     // if lastElement or the length of lastElement is equal to the chunk size
//     if (!lastElement || lastElement.length === size) {
//       // add a new chunk/element to chunkArr
//       chunkArr.push([element]);
//     } else {
//       // push chunk and add element into it
//       lastElement.push(element)
//     }
//   }
//   // returned the chunkArr
//   return chunkArr;
// }
