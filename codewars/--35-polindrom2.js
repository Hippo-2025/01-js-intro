// 6# Numerical Palindrome #3.5
/* A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are: 2332, 110011, 54322345

For a given number num, write a function which returns an array of all the numerical palindromes contained within each number. The array should be sorted in ascending order and any duplicates should be removed.

In this kata, single digit numbers and numbers which start or end with zeros (such as 010 and 00) are NOT considered valid numerical palindromes.

If num contains no valid palindromes, return "No palindromes found". Otherwise, return "Not valid" if the input is not an integer or is less than 0.

Examples
1221      -->  [22, 1221]
34322122  -->  [22, 212, 343, 22122]
1001331   -->  [33, 1001, 1331]
1294      -->  "No palindromes found"
"1221"    -->  "Not valid"
*/

function polindromas(word) {
    let isPolind = false;
    let lenhalf = Math.floor(word.length/2);
    let half1 = word.slice(0, lenhalf);
    let half2 = word.slice(-lenhalf);
        
    half2 = half2.split("").reverse().join("");
    if ( (half1 === half2) && ((half1[0] && half2[0]) != "0")) {
        isPolind = true;
    }
    return isPolind;
}


function palindrome(num){ 
    if (!isFinite(num)) {
        return "Not valid";
    }
    let array = [];
    array.push(num + '');
    let numstr = array[0];
    let array2 = array[0].split('');
    let len = array2.length;
    let polcnt = 0;
  //  const newNlen = len - 1;
    let x = len*(len+1)/2 - len;
    let allnumbers = Array(x).fill('');
    
      for (i = len; i > 1; i-- ) {
       // let counter = len - i + 1;
      //  console.log(counter);
        for (k = 0; (k + i) <= len; k++) {
            newnum = numstr.slice(k, i+k);
            console.log(newnum);
            allnumbers[x] = newnum;
            x--;           
        }       
    } 
     console.log(allnumbers);

     for (const n of allnumbers) {
        let i=0;
        if(polindromas(n)) {
            allnumbers[x] = newnum;
            console.log(n);
        }
     } 
    return array;
}
palindrome(1001331);