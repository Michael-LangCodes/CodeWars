// Given three arrays of integers, return the sum of elements that are common in all three arrays.

// For example:

// common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
// common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays


//Solution
function common(a, b, c) {
  a.sort((x, y) => x - y)
  b.sort((x, y) => x - y)
  c.sort((x, y) => x - y)

  let i = 0, j = 0, k = 0
  let sum = 0

  while (i < a.length && j < b.length && k < c.length) {
    if (a[i] === b[j] && b[j] === c[k]) {
      sum += a[i]
      i++
      j++
      k++
    } else {
      let min = Math.min(a[i], b[j], c[k])
      if (a[i] === min) i++
      if (b[j] === min) j++
      if (c[k] === min) k++
    }
  }

  return sum
}