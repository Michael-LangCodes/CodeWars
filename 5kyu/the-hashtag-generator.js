// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized, and remaining letters lowercased.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

//My Solution
function generateHashtag (str) {
  const newstr = str.replaceAll(' ', '');
  if (newstr.length>140){
    console.log('false,too long')
    return false
  }else if (newstr.length===0){
    console.log('false, too short')
    return false
  }else{
    let output = '#'
    newstr.split(' ').forEach(e => console.log(e.charAt(0).toUpperCase()+ e.slice(1)))
    newstr.split(' ').forEach(e => output+=(e.charAt(0).toUpperCase()+ e.slice(1)))//console.log(e.charAt(0).toUpperCase()+ e.slice(1)))
    console.log(output)
    return output
  }
}