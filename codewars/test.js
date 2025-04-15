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
*/

const userInput = '22';
const userNumber = parseInt(userInput);
const date = userNumber + 5;

console.log(date);

console.log(parseInt('65'));
console.log(parseInt('65.314'));
console.log(parseInt('-65'));
console.log(parseInt('-65.314'));

console.log(parseInt('labas'));
console.log(parseInt('labas111'));
console.log(parseInt('222labas'));
console.log(parseInt('222labas333'));
console.log(parseInt('222la444bas333'));
console.log(parseInt('2,5'));
console.log(parseInt('2.5'));

console.log(parseInt(true));

console.log(parseInt('222labas333'.replace('labas', '')));
console.log(parseInt('222333'));

console.log(parseInt('222labas333'.split('labas')));
console.log(parseInt(['222', '333']));