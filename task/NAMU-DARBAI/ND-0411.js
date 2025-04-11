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
console.log(howmanyL(text, "ar"));
