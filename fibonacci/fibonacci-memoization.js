// Memoziation is used to store/cache arguments of each function call along with their result
// If the function is called again with the same arguments, return the precomputed result
// rather then running the function again

const fibMemo = cb => {
  // hash table to store all previous calls and results
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = cb.apply(this, args)
    cache[args] = result
    return result
  } 
}

const fib = n => {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
// memoize the function and function and assign it back to fib
fib = fibMemo(fib);