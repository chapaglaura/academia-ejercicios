/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function (digits) {
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;
  var maxNum = 0;
  var minNum = Math.pow(10, digits - 1);

  // do your work here

  for (var i = 0; i < digits; i++) {
    maxNum += 9 * Math.pow(10, i);
  }


  for (var i = minNum; i <= maxNum; i++) {
    for (var j = minNum; j <= maxNum; j++) {
      var product = i * j;
      var productString = product.toString();
      var reversed = productString.split('').reverse().join('');
      if (reversed == product && product > palindromeNumber) {
        factor_0 = i;
        factor_1 = j;
        palindromeNumber = product;
      }
    }
  }



  return {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber
  };


};