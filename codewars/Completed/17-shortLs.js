function solution(a, b){
    let lena = a.length;
    let lenb = b.length;
    let result = '';
    if (lena < lenb) {
        result = a + b + a;
    } else if (lenb < lena) {
        result = b + a + b;
    }
  return result;
}

console.log(solution('45', '1'), '1451');
console.log(solution('13', '200'), '1320013');
console.log(solution('Soon', 'Me'), 'MeSoonMe');
console.log(solution('U', 'False'), 'UFalseU');

// BETTER
// Using if...else, explicit block syntax
function solution(a, b) {
    if (a.length < b.length) {
        return a + b + a;
    } else {
        return b + a + b;
    }
}

// Using if..., implicit else, compressed syntax
function solution(a, b) {
    if (a.length < b.length) return a + b + a;
    return b + a + b;
}

// Using ternary conditional operator
function solution(a, b) {
    return (a.length < b.length) ? (a + b + a) : (b + a + b);
}

// ES6 arrow function
var solution = (a, b) =>
    (a.length < b.length) ? (a + b + a) : (b + a + b);