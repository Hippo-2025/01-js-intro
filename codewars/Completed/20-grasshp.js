// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

function greet (name, owner) {
    let msg = 'Hello ';
    let finalmsg = '';
    if (name === owner ) {
        finalmsg = msg + 'boss';
    } else {
        finalmsg = msg + 'guest';
    }
        return finalmsg;
  }

 // console.log(`Hello ${greet('Daniel', 'Daniel')}`);
 //  console.log(`Hello ${greet('Greg', 'Daniel')}`);

 function greet (name, owner) {
    return name === owner ? 'Hello boss' : 	'Hello guest';
  }

  function greet (name, owner) {
    return `Hello ${name==owner?'boss':'guest'}`
  }

  const greet = (name, owner) => name == owner? 'Hello boss': 'Hello guest';