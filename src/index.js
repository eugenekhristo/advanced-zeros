// return object primes with powers
function primeFactors(number) {
  const primes = [];

  for (var i = 2; i <= number / i; i++) {
    while (number % i === 0) {
      number /= i;
      primes.push(i);
    }
  }
  if (number > 1) primes.push(number);

  // make an object with info
  return primes.reduce((obj, num) => {
    if (!obj[num]) obj[num] = 1;
    else obj[num]++;
    return obj;
  }, {});
}

// find how many each factor is encountered in number
function countPrimeFactorsInNumber(number, primeFactor) {
  let count = 0;
  let by = primeFactor;
  while (number / by > 1) {
    count += Math.floor(number / by);
    by *= primeFactor;
  }
  return count;
}

module.exports = function getZeroes(N, b) {
  // primes with powers
  const primes = primeFactors(b);
  const simplePrimes = Object.keys(primes);

  const probableAnswers = simplePrimes.map(primeFactor => {
    // find how many each factor is encountered in еру number
    const howMany = countPrimeFactorsInNumber(N, primeFactor);
    // divided by powers count of the prime number
    return Math.floor(howMany / primes[primeFactor]);
  });

  return Math.min(...probableAnswers);
};
