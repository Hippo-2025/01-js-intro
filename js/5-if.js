/* 
IF - palyginimo salyga

Palg. operatoriai;

- visi : >, <, <=, >=, ==, ===, !=, !==
nenaudotini: ==, !=

Kodo sablonai
if () {}
if () {} else {}
if () {} else if ()
if () {} else if () else if () else {}
if () {} ... else if () ...
if () {} ... else if () ... else {}

*/

if (4 < 2) {
console.log ('....taip');

}  else {
 console.log('---ne')       
}

console.log('END');

console.clear;

const temp = 18;

if (temp >= 18) {
    console.log('silta');
} else {
    console.log('salta');
}

// jei zemiau 0 - salta
// jei zemiau 10 - meh
//jei zemiau 22 - silta
//jei zemiau daugiau - karsta

console.clear();

const temp2 = -2;

if (temp2 <0) {
    console.log ('salta');
} else if (temp2 < 10 ) {
    console.log('meh');
} else if (temp2 < 22) {
    console.log ('silta');
} else {
    console.log('karsta');
}