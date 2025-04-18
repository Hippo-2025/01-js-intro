/*
Switch/Case - Bug Fixing #6
Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function? */
// **************** JUST NEEDED TO ADD   "BREAK" after each case.
function evalObject(value){
    var result = 0;
    switch(value.operation){
      case'+': result = value.a + value.b; break;
      case'-': result = value.a - value.b; break;
      case'/': result = value.a / value.b; break;
      case'*': result = value.a * value.b; break;
      case'%': result = value.a % value.b; break;
      case'^': result = Math.pow(value.a, value.b);  break;
    }
    return result;
  }

  // sols

  function evalObject(value){                // return replaces break?
    switch(value.operation){
      case'+': return value.a + value.b;
      case'-': return value.a - value.b;
      case'/': return value.a / value.b;
      case'*': return value.a * value.b;
      case'%': return value.a % value.b;
      case'^': return Math.pow(value.a, value.b);
    }
  }

  let ops = {                           // ???
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => a / b,
    '*': (a, b) => a * b,
    '%': (a, b) => a % b,
    '^': Math.pow,  // ???
  }
  
  let evalObject = o => ops[o.operation](o.a, o.b) //???