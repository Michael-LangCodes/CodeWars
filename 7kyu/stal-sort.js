// Implement the function stalin_sort / stalinSort, which accepts an array of integers and modifies it in-place, removing all elements that violate the ascending order relative to the previous surviving element.

// All other elements are considered enemies of order and must be eliminated.

//Solution
function stalinSort(array) {
  let output = [];

  if (array.length === 0) return output;

  let check = array[0];
  output.push(check);

  array.slice(1).forEach(e => {
    if (e >= check) {
      output.push(e);
      check = e;
    } else {
      console.log("Расстрелять!");
    }
  });

  return output;
}