// Raffle Run: What Are the Odds?
// You've entered multiple independent raffles back to back. Each raffle is a single-winner draw: one ticket is pulled from the pool, and if it's yours, you win.

// Given two arrays of equal length:

// totals — the total number of tickets sold in each raffle
// purchased — how many tickets you bought in each raffle
// Return your probability of winning at least one raffle as a simplified fraction string in the form "numerator/denominator". This fraction must be full reduced, so "4/8" becomes "1/2" and "9/12" becomes "3/4."

// Probability Hint
// For independent events, the probability of winning at least one is the complement of losing all of them:

// P(A or B or ...) = 1 - P(!A) * P(!B) * ...

// where P(!X) is the probability of not winning raffle X.

//Solution
function raffleOdds(totals, purchased) {
  // Multiply fractions: (a/b) * (c/d) = (ac)/(bd)
  const multiplyFractions = ([n1, d1], [n2, d2]) => {
    return simplify([n1 * n2, d1 * d2]);
  };

  // Subtract fractions: (a/b) - (c/d) = (ad - bc)/(bd)
  const subtractFractions = ([n1, d1], [n2, d2]) => {
    return simplify([n1 * d2 - n2 * d1, d1 * d2]);
  };

  // Simplify fraction
  const simplify = ([num, den]) => {
    const g = gcd(num, den);
    return [num / g, den / g];
  };

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  // Start with probability of losing all raffles = 1
  let loseAll = [1, 1];

  for (let i = 0; i < totals.length; i++) {
    // P(lose raffle i) = (totals[i] - purchased[i]) / totals[i]
    const loseThis = [totals[i] - purchased[i], totals[i]];
    loseAll = multiplyFractions(loseAll, loseThis);
  }

  // P(win at least one) = 1 - P(lose all)
  const result = subtractFractions([1, 1], loseAll);

  return `${result[0]}/${result[1]}`;
}