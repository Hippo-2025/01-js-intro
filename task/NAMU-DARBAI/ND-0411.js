// 1. Parašykite funkciją, kuri išvestų skaičiaus faktorialą
/*
function faktorial(n) {
    let fakt = 1;
    for (let i = 1; i <= n; i++) {
        fakt *=i;
    }
    return fakt;
}

console.log(faktorial(6));
*/
// 2. Parašykite funkciją, kuri apskaičiuotų kiek kartų tam tikra raidė pasikartojo žodyje arba sakinyje
 
function howmanyL(string, ltr) {
    let num = 0;
    let newstring = string;
    newpos = newstring.indexOf(ltr);
     
    if (newpos === -1) {
        return `This text doesn't have letter ${ltr}`;
    } else {
        while (newpos >= 0) {
            num+=1;
            newstring = newstring.slice(newpos+1);
            console.log(newstring+'\n');
            newpos = newstring.indexOf(ltr);
        }
    }
    return num; 
}
const text = "Parašykite funkciją, kuri apskaičiuotų kiek kartų tam tikra raidė pasikartojo žodyje arba sakinyje";
// console.log(howmanyL(text, "ar"));

// Padarykite funkciją, kuri grąžintų visus skaičiaus 3 kartotinius nuo 1 iki 50

function kartot3 (num, x) {
    let answer = [];
    for (let i = x; i <= num; i+=x) {
        answer.push(i);
    }
    return answer;
}
 
console.log(kartot3(50, 3));

// Parašykite funkciją, kuri patikrintų ar duotas žodis yra palindromas

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

console.log(polindromas("1234-321"));

