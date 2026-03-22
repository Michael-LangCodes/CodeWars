// KISS stands for Keep It Simple Stupid. It is a design principle for keeping things simple rather than complex.

// You are the boss of Joe.

// Joe is submitting words to you to publish to a blog. He likes to complicate things.

// Define a function that determines if Joe's work is simple or complex.

// Input will be non emtpy strings with no punctuation.

// It is simple if: the length of each word does not exceed the amount of words in the string (See example test cases)

// Otherwise it is complex.

//My Solution
function isKiss( words ){
  let split = words.split(' ');
  let splitLength = split.length;
  let output = "Good work Joe!";
  split.forEach((e,i)=>{
    e.length > splitLength ? output = 'Keep It Simple Stupid' : ''
  })
  return output
}