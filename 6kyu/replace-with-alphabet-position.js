// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

//My Solution
function alphabetPosition(text) {
  let output = ''
  for (let i = 0; i<text.length;i++){
    let code = text[i].toLowerCase().charCodeAt() - 96;
    if (code <= 0 || code > 26){
      
    }
    else {
      if(output.length === 0){
        output += code
      }else{
        output += ` ${code}`
      }
  }
  }
  return output;
}