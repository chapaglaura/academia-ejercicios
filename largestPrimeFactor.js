exports.largestPrimeFactor = function(n){
  var primeNumber = 0;
  var primeFactors = [];

  for (var i = 2; i <= n; i++) {
    while (n % i === 0) {
      primeFactors.push(i);
      n = n / i;
    }
  }

  if (n > 2) {
    primeFactors.push(n)
  }
  // do your work here
  primeNumber = primeFactors[primeFactors.length - 1];
  return primeNumber;
};