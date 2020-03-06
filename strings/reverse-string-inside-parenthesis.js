// Reverse the strings inside the parenthesis
// this solution has a time complexity of O(n)
// this solution has a space complexity of O(n)

// Loop the whole string and push into a stack for non-")" character.
// If we get a ")" in the loop, we pop all characters until meets "(", and push them into stack again in sequence to reverse them.

const reverseParentheses = s => {
  const stack = [];
  for (let char of s) {
    if (char !== ")") {
      debugger;
      stack.push(char);
      debugger;
      continue;
    }
    let c = stack.pop();
    debugger;
    let queue = [];
    while (c !== "(") {
      queue.push(c);
      c = stack.pop();
    }
    while (queue.length) {
      stack.push(queue.shift());
    }
  }
  console.log(stack.join(""))
  return stack.join("");
};

reverseParentheses("i((evol))u");
reverseParentheses("co(de(fight)s)");