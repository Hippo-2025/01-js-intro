/* This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.

About factors
Factors are numbers you can multiply together to get another number.
2 and 3 are factors of 6 because: 2 * 3 = 6
You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
*/

function checkForFactor (base, factor) {
    let fact = false;
    if (base % factor === 0) {
        fact = true;
    }
    return fact;
  }

  console.log(checkForFactor(10,2))
  console.log(checkForFactor(63,7))

  
  console.log(checkForFactor(9,2))
  console.log(checkForFactor(653,7))


  // SOLS

  function checkForFactor (base, factor) {
    return !(!!(base%factor));
  }
  