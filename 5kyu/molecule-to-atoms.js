// For a given chemical formula represented by a string, count the number of atoms of each element contained in the molecule and return an object (associative array in PHP, Dictionary<string, int> in C#, Map<String,Integer> in Java).

// For example:

// var water = 'H2O';
// parseMolecule(water); // return {H: 2, O: 1}

// var magnesiumHydroxide = 'Mg(OH)2';
// parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

// var fremySalt = 'K4[ON(SO3)2]2';
// parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}
// As you can see, some formulas have brackets in them. The index outside the brackets tells you that you have to multiply count of each atom inside the bracket on this index. For example, in Fe(NO3)2 you have one iron atom, two nitrogen atoms and six oxygen atoms.

// Note that brackets may be round, square or curly and can also be nested. Index after the braces is optional.

//Solution
function parseMolecule(formula) {
  const stack = [{}]; // stack of count objects
  const multipliers = [];
  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  let i = 0;

  while (i < formula.length) {
    const char = formula[i];

    // Opening bracket
    if (brackets[char]) {
      stack.push({});
      multipliers.push(brackets[char]);
      i++;
    }

    // Closing bracket
    else if (Object.values(brackets).includes(char)) {
      let temp = stack.pop();
      multipliers.pop();
      i++;

      // Parse multiplier after bracket
      let num = '';
      while (i < formula.length && /\d/.test(formula[i])) {
        num += formula[i++];
      }
      const multiplier = num ? parseInt(num) : 1;

      // Merge into previous level
      let top = stack[stack.length - 1];
      for (let el in temp) {
        top[el] = (top[el] || 0) + temp[el] * multiplier;
      }
    }

    // Element name
    else if (/[A-Z]/.test(char)) {
      let element = char;
      i++;

      // capture lowercase letters
      while (i < formula.length && /[a-z]/.test(formula[i])) {
        element += formula[i++];
      }

      // capture number
      let num = '';
      while (i < formula.length && /\d/.test(formula[i])) {
        num += formula[i++];
      }

      const count = num ? parseInt(num) : 1;
      let top = stack[stack.length - 1];
      top[element] = (top[element] || 0) + count;
    }

    else {
      i++;
    }
  }

  return stack[0];
}