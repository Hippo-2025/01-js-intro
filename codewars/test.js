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


function polindromas(word) {
    let isPolind = false;
    let lenhalf = Math.floor(word.length/2);
    let half1 = word.slice(0, lenhalf);
    let half2 = word.slice(-lenhalf);
        
    half2 = half2.split("").reverse().join("");
    if (half1 === half2) {
        isPolind = true;
    }

    return isPolind;
}

console.log(polindromas("12345__54321"));

// slice
console.clear();
console.log('\nslice');

console.log('pomidoras'.slice());
console.log('pomidoras'.slice(0));
console.log('pomidoras'.slice(1));
console.log('pomidoras'.slice(2));
console.log('pomidoras'.slice(3));

console.log('Teatras'.slice(1, 7));
console.log('pomidoras'.slice(0, 2));
console.log('pomidoras'.slice(0, 3));
console.log('pomidoras'.slice(1, 3));

console.log('pomidoras'.slice(0, -1));
console.log('pomidoras'.slice(0, -2));
console.log('pomidoras'.slice(0, -3));
console.log('pomidoras'.slice(3, -3));

console.log('pomidoras'.slice(-4));
console.log('pomidoras'.slice(-6, -2));
*/

function sum(a, b) {
    return a+b;
}
/*
let ops = {                           // ???
    '+': sum,
    '-': (a, b) => a - b,
    '/': (a, b) => a / b,
    '*': (a, b) => a * b,
    '%': (a, b) => a % b,
    '^': Math.pow,  // ???
  }
  
  let evalObject = o => ops[o.operation](o.a, o.b) //???
  
  console.log(ops['^'](2,3));

class Math{
    pow (a, b) {
return a ** b;
    }
} 
let tet = 0;
    switch (tet) {
        case 0: return 0;
        case 1: return 40;
        case 2: return 100;           
        case 3: return 300;           
        case 4: return 1200;
    }
console.log(tet(3));

*/

function checkForFactor (base, factor) {
    return !(base%factor);
  }

  console.log(checkForFactor(10,2))
  console.log(checkForFactor(63,7))
  
  console.log(checkForFactor(9,2))
  console.log(checkForFactor(653,7))


