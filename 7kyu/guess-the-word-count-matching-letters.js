// Consider a game, wherein the player has to guess a target word. All the player knows is the length of the target word.

// To help them in their goal, the game will accept guesses, and return the number of letters that are in the correct position.

// Write a method that, given the correct word and the player's guess, returns this number.

// For example, here's a possible thought process for someone trying to guess the word "dog":

// "dog"   # correct word
// "car"   # guess
// # Should return 0 (No letters are in the correct position)

// "dog"   # correct word
// "god"   # guess
// # Should return 1 ('o')

// "dog"   # correct word
// "cog"   # guess
// # Should return 2 ('o' and 'g')

// "dog"   # correct word
// "cod"   # guess
// # Should return 1 ('o')

// "dog"   # correct word
// "bog"   # guess
// # Should return 2 ('o' and 'g')

// "dog"   # correct word
// "dog"   # guess
// # Should return 3 (Correct!)
// The caller should ensure that the guessed word is always the same length as the correct word, but since it could cause problems if this were not the case, you need to check for this eventuality:

// Raise / throw an error (in C#: an InvalidOperationException) if the two parameters are of different lengths.
// You may assume, however, that the two parameters will always be in the same case.

//My Solution
function countCorrectCharacters(correctWord, guess){
  let sum = 0
  if (correctWord.length !== guess.length){
    throw new Error("Length Is Not The Same.");
  }
  for(let i = 0; i<correctWord.length;i++){
    if(correctWord[i] === guess[i]){
      sum += 1
    }
  } 
  return sum
}