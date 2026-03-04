// Give the summation of all even numbers in a Fibonacci sequence up to, but not including, the number passed to your function. Or, in other words, sum all the even Fibonacci numbers that are lower than the given number n (n is not the nth element of Fibonacci sequence) without including n.

// The Fibonacci sequence is a series of numbers where the next value is the addition of the previous two values. The series starts with 0 and 1:

// 0 1 1 2 3 5 8 13 21...

// For example:

// 0 --> 0
// 33 --> 10
// 25997544 --> 19544084

//My Solution
function fibonacci(max) {
  let fib = 0;
  let total = 0;
  let current = 1;
  let last = 0;
  while(current<max){
    fib = current + last;
    last = current;
    current = fib;
    if(fib%2 === 0 && fib < max){
      total +=fib
    }
  }
  return total
}
