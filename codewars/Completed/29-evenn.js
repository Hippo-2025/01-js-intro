// Is number even?
function testEven(n) {
    if (n-Math.floor(n) > 0) {
      return false;
    } else if (n/2-Math.floor(n/2) === 0) {
      return true;
    } else {
      return false;
    }
}


// OSOLS

function testEven(n) {
    return n%2===0;
}

function testEven(n) {
    return n % 2 === 0 ? true : false;
  }

  function testEven(n){
    return !(n % 2);
  }