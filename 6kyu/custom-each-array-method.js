// JavaScript provides an Array.prototype.forEach method that allows you to iterate over array values. 
// For this exercise you will create your own array method called 'each'. 
// It will be similar to the forEach method, except for one difference. 
// If the callback function returns true then the loop will stop and no additional values will be iterated.

//Solution
Array.prototype.each = function(callback) {
  for(let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this) === true) break
  }
}