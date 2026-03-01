// This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

// Task:
// Give you a room(n x n matrix), there are some sundries(any character except spaces). Our task is to put the sundries neatly placed in the upper left corner of the room(a small metrix)

// Example:
// example1:

// room:[
// ["a"," "," "," "," "],
// [" "," ","b"," "," "],
// [" "," "," "," "," "],
// [" ","c"," "," "," "],
// [" "," ","d"," "," "]
// ]
// There are 4 sundries in the room(a,b,c,d), so we put them in the 2x2 matrix, output should be:

// [
// ["a","b"," "," "," "],
// ["c","d"," "," "," "],
// [" "," "," "," "," "],
// [" "," "," "," "," "],
// [" "," "," "," "," "]
// ]
// example2:

// room:[
// ["a"," "," "," "," "],
// [" "," ","b"," "," "],
// [" "," "," "," "," "],
// [" ","c"," "," "," "],
// [" "," ","d","e"," "]
// ]
// There are 5 sundries in the room(a,b,c,d,e), they cannot be put into the 2x2 matrix, so we put them in the 3x3 matrix, output should be:

// [
// ["a","b","c"," "," "],
// ["d","e"," "," "," "],
// [" "," "," "," "," "],
// [" "," "," "," "," "],
// [" "," "," "," "," "]
// ]
// For more example see the testcases.

//Solution
function sc(room){
  const n = room.length;
  
  // Step 1: Collect all sundries
  const items = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (room[i][j] !== " ") {
        items.push(room[i][j]);
      }
    }
  }

  const k = items.length;
  const m = Math.ceil(Math.sqrt(k)); // smallest square size

  // Step 2: Create empty n x n matrix
  const result = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => " ")
  );

  // Step 3: Fill top-left m x m area
  let index = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
      if (index < k) {
        result[i][j] = items[index++];
      }
    }
  }

  return result;
}