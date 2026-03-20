// The goal of this Kata is to write a function that will receive an array of strings as its single argument, then the strings are each processed and sorted (in desending order) based on the length of the single longest sub-string of contiguous vowels ( aeiouAEIOU ) that may be contained within the string. The strings may contain letters, numbers, special characters, uppercase, lowercase, whitespace, and there may be (often will be) multiple sub-strings of contiguous vowels. We are only interested in the single longest sub-string of vowels within each string, in the input array.

// Example:

// str1 = "what a beautiful day today"
// str2 = "it's okay, but very breezy"
// When the strings are sorted, str1 will be first as its longest sub-string of contiguous vowels "eau" is of length 3, while str2 has as its longest sub-string of contiguous vowels "ee", which is of length 2.

// If two or more strings in the array have maximum sub-strings of the same length, then the strings should remain in the order in which they were found in the orginal array.

//Solution
function sortStringsByVowels(strings) {
  const vowels = ['a','e','i','o','u'];

  const mapped = strings.map((str, index) => {
    let max = 0;
    let current = 0;

    for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) {
        current++;
        max = Math.max(max, current);
      } else {
        current = 0;
      }
    }

    return { str, max, index };
  });

  mapped.sort((a, b) => {
    if (b.max !== a.max) return b.max - a.max;
    return a.index - b.index; // preserve original order
  });

  return mapped.map(e => e.str);
}