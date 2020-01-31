// Recursive Solution -> run time 2 ^ n (Exponential Time) -- NEVER USE THIS --
const fibRecurse = n => {
  // base case -> stop recursing
  if (n < 2) {
    return n;
  }
  // make two function calls until you reached base case then return
  return fib(n - 1) + fib(n - 2);
};

// Testing
console.log(fibRecurse(4)); // 3
console.log(fibRecurse(5)); // 5
console.log(fibRecurse(6)); // 8
console.log(fibRecurse(7)); // 13
