/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
 var x = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  // do your work here

  for (var i = 0; i < digits; i++) {
    factor_0 += 9 * Math.pow(10, i);
  }

  factor_1 = factor_0;

  for (var i = 1; i < factor_0; i++) {
    for (var j = 1; j < factor_1; j++) {

      if (i.toString().length > digits)
      var product = i * j;
      product += '';
      var reversed = "";
      console.log(i, j, product);
      for (var k = product.length; k >= 0; k--) {
        reversed += product[k];
      }
      if (reversed === product) {
        factor_0 = i;
        factor_1 = j;
        palindromeNumber = parseInt(product);

        console.log(factor_0, factor_1, palindromeNumber);
      }
    }
  }



  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };


};

console.log(x(2));