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
const default7 = Array(7).fill(99);
console.log(default7);


function replicate(times, number) {
    if (times < 0) {
        count = 0;
    } else {
        count = times;
    }
	const msv = Array(count).fill(number);
    return msv;
}

console.log(replicate(3,5));
console.log(replicate(-1,12));

function booleanToString(b){
    return Array(1).fill(b+'');
  }

  console.log(booleanToString(NaN));