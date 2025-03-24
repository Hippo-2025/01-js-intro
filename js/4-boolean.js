/*
 BOOLEAN - login reiksme
 - true
 - false

 Loginiai operatoriai
 && - and (ir) (prioritetas, kaip daugybos)
 || - or (arba)

 */

 const isEven = true;
 const isOdd = false;

 console.log(true && true);
 console.log(true && false);
 console.log(false && true);
 console.log(false && false);

 console.log(true || true);
 console.log(true || false);
 console.log(false|| true);
 console.log(false || false);

 console.clear();

console.log(1, true && true || true);
console.log(2, true && true || false);
console.log(3, true && false || true);
console.log(4, true && false || false);

// ND2: surasyti visas imanomas kombinacijas, su && ir ||, kai yra naudojamos 4 boolean reiksmes.

console.log(true && true && true && true);
console.log(true && true && true && false);
console.log(true && true && true || true);
//*****************
