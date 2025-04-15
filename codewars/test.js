/*
let str = "a";
let num = Number(str);
console.log(num);
console.log(Number.isFinite(num));


let result = false;
if ('a' > "b") { result = true;}

console.log(result);

let str ="a\n";
let len = str.length;
console.log(len);


function calcType(a, b, res) {
console.log(a);
console.log(b);
console.log(res);

return('ok');
}


const summer2 = 'vasara'.replace(/a/g, '');
console.log(summer2);

const a = new Number("123"); // a === 123 is false
const b = Number("123"); // b === 123 is true

console.log(a);
console.log(b);

console.log(~~3.2);
const x = 1.01 * 2^3
console.log(x);

console.log(isFinite(5), Number.isFinite(5));
console.log(isFinite(-3.14), Number.isFinite(-3.14));
console.log(isFinite(Infinity), Number.isFinite(Infinity));
console.log(isFinite(NaN), Number.isFinite(NaN));
console.log(isFinite('adsfdgf'), Number.isFinite('adsfdgf'));
console.log(isFinite(true), Number.isFinite(true));
console.log(isFinite([]), Number.isFinite([]));
console.log(isFinite({}), Number.isFinite({}));

*/

function buildString(...template){
    let newstring ="";
    for (const number of template) {
        newstring+=number+', ';
    }  
    newstring = newstring.slice(0,-2);
     
    return `I like ${newstring}!`;
  }

console.log(buildString(1,2,3));

// sols

function buildString2(...template){
    return `I like ${template.join(', ')}!`;
  }
  console.log(buildString2('Cheese','Milk','Chocolate'));
