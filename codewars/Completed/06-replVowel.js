// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

function isVowel(letter) {
    let value = false;
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' || letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U') 
    {
        value = true;
    }
    
    return(value);
}

function replace (string) {
    let strL = string.length;
    let newString = "";
    
    for (let i = 0; i < strL; i++) {
        if (isVowel(string[i]) === true ) {
            newString += '!';
        } else {
                newString += string[i];
        }
    } 
    return(newString);
}

console.log(replace("Hi!"));
console.log(replace("!Hi! Hi!"));
console.log(replace("aeiou"));
console.log(replace("ABCDE"));


