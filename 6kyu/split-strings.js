// Complete the solution so that it splits the string into strings of two characters in a list/array (depending on the language you use). If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

//Solution
function solution(str){
    let arr = [];
    if (str.length % 2 == 0){
     for (i = 0; i < str.length; i+=2){
       arr.push(str.slice(i,i+2))
     }
    }
    else{
      for (i = 0; i < str.length-1; i+=2){
       arr.push(str.slice(i,i+2))
    }
      arr.push(`${str[i]}_`)
   }
      return arr
}