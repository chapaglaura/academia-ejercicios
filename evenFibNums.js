/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */

function _sumFibs(maxFibValue) {
  var sum = 0;
  var arr = [1, 2];
  for (var i = 1; arr[arr.length - 1] <= maxFibValue; i++) {
    arr.push(arr[i] + arr[i - 1]);
  }

  arr.pop();


  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}

// bonus round
function _highestFibonacciNumber(maxFibValue) {
  var highest = 0;

  //define your base case, validate your input
  var arr = [1, 2];

  for (var i = 1; arr[arr.length - 1] <= maxFibValue; i++) {
    arr.push(arr[i] + arr[i - 1]);
  }

  arr.pop();

  highest = arr[arr.length - 1];
  //do your work here

  return highest;
}

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs: _sumFibs,
  highestFibonacciNumber: _highestFibonacciNumber
};