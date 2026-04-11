// Consider the following equation of a surface S: z*z*z = x*x * y*y.
// Take a cross section of S by a plane P: z = k where k is a positive integer (k > 0).
// Call this cross section C(k).

// Task
// Find the number of points of C(k) whose coordinates are positive integers.

// Examples
// If we call c(k) the function which returns this number we have

// c(1) -> 1
// c(4) -> 4
// c(4096576) -> 160
// c(2019) -> 0 which means that no point of C(2019) has integer coordinates.
// Notes
// k can go up to about 10,000,000,000 (1e10), so mind the time complexity of your code
// Prolog: the function cis called section.
// COBOL: the function cis called sections.

//Solution
function c(k) {
    if(Math.sqrt(k) % 1 !=0){
      return 0
    }else{
      k = k**(3/2)
      let count = 1;

    // Factor 2
    let exponent = 0;
    while (k % 2 === 0) {
        exponent++;
        k /= 2;
    }
    if (exponent > 0) count *= (exponent + 1);

    // Odd factors
    for (let i = 3; i * i <= k; i += 2) {
        exponent = 0;
        while (k % i === 0) {
            exponent++;
            k /= i;
        }
        if (exponent > 0) count *= (exponent + 1);
    }

    // Remaining prime
    if (k > 1) count *= 2;

    return count;
    }
}