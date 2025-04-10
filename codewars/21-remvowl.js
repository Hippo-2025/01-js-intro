// Your task is to write a function that takes a string and return a new string with all vowels removed.

function disemvowel(str) {
    const newstr = str.replace(/a/g,'' ).replace(/e/g,'' ).replace(/i/g,'' ).replace(/o/g,'' ).replace(/u/g,'' ).replace(/A/g,'' ).replace(/E/g,'' ).replace(/I/g,'' ).replace(/O/g,'' ).replace(/U/g,'' )
    
    return newstr;
  }

console.log(disemvowel("This website is for losers LOL!"));


function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

const vowels = 'aeiou';

function disemvowel(str) {
  return str                 // Why return on the top of the f?
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))   // ?
    .join('');
}
