function calcType(a, b, res) {
let action = "";
let add = 'addition';
let sub = 'subtraction';
let mul = 'multiplication';
let div = 'division';

if (a === undefined || b === undefined || res === undefined) {
    action = div;
} else if( Number.isFinite(a) && Number.isFinite(b) && Number.isFinite(res))  {
    if (a + b === res) {
        action = add;
    } else if (a - b === res) {
        action = sub;
    } else if (a*b === res) {
        action = mul;
    } else if (res === a/b) {
        console.log(a/b);
        action = div;
    }
}
return(action);
}
/*
console.log(calcType(10, 5, 5));
console.log(calcType(10, 4, 40));
console.log(calcType(10, 5, 5));

console.log(calcType(10, 3, 10/3));
*/
console.log(calcType());

