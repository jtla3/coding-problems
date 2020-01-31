// Print out the nth value in the fibonacci series
// the fibonacci series is an ordering of numbers where each number is sum of the preceeding two

// example: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// result of fib(4) === 3 

// Iterative Solution -> run time is O(n) (Linear Time)
const fib = n => {
  // create array to hold the series of numbers start it at 0 and 1 since there aren't any previous numbers to 
  const result = [0, 1];

  // for loop that start at 2 and iterates all the way up to n
  for (let i = 2; i <= n; i++){
    const a = result[i - 1];
    const b = result[i - 2];

    // push into result array
    result.push(a + b);
  }
  // return n
  return result[n]
}

// Testing
console.log(fib(4)); // 3
console.log(fib(5)); // 5
console.log(fib(6)); // 8
console.log(fib(7)); // 13



