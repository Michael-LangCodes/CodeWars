// This kata requires you to write a function which merges two strings together. It does so by merging the end of the first string with the start of the second string together when they are an exact match.

// "abcde" + "cdefgh" => "abcdefgh"
// "abaab" + "aabab" => "abaabab"
// "abc" + "def" => "abcdef"
// "abc" + "abc" => "abc"
// NOTE: The algorithm should always use the longest possible overlap.

// "abaabaab" + "aabaabab" would be "abaabaabab" and not "abaabaabaabab"

//My Solution
function mergeStrings(first, second){
  let overlap = 0;

  // Find the largest overlap
  for (let i = 1; i <= Math.min(first.length, second.length); i++) {
    if (first.slice(-i) === second.slice(0, i)) {
      overlap = i;
    }
  }

  return first + second.slice(overlap);
}