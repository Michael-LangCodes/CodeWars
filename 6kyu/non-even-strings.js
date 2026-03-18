// Given a string of integers, return the number of odd-numbered substrings that can be formed.

// For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

// solve("1341") = 7. See test cases for more examples.

//Solution
function solve(s) {
  let output = 0;

  for (let i = 0; i < s.length; i++) {
    if (Number(s[i]) % 2 !== 0) {
      output += (i + 1);
    }
  }

  return output;
}