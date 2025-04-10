// Remove all exclamation marks from the end of sentence.

function remove(string) {  
    let newStr = string;
    let len = string.length-1;
    while (string[len] === "!") {
        newStr = newStr.slice(0, -1);
        len--;
     }
   return newStr;
  }

  
console.log(remove("Hi!")) 
console.log(remove("Hi!!!"))
console.log(remove("!Hi"))
console.log(remove("!Hi!"))
console.log(remove("Hi! Hi!"))
console.log(remove("Hi"))

