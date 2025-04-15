// Implement a function which convert the given boolean value into its string representation.

function booleanToString(b){
    const str = b ? "true" : "false"
    return str
 }

 // OSOLS

 function booleanToString(b){
    return b.toString();
  }

  function booleanToString(b){
    return `${b}`
  }


  function booleanToString(b){  
    return b+'';  // !!! Turns anything in to a String
  }

  console.log(booleanToString(false));
  