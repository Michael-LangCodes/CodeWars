//I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

//Solution
function mutateMyStrings(stringOne, stringTwo) {
  if (stringOne.length !== stringTwo.length) {
    throw new Error("Strings must be the same length");
  }

  let current = stringOne.split('');
  let output = stringOne + '\n';

  for (let i = 0; i < stringTwo.length; i++) {
    if (current[i] !== stringTwo[i]) {
      current[i] = stringTwo[i];
      output += current.join('') + '\n';
    }
  }

  return output;
}