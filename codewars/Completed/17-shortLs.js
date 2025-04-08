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
