// 1. Spausdinkite skaičius nuo 1 iki 10 naudodami for ciklą.
for (let i=1; i<=10; i++) {
    console.log(i);
}

// 2. Spausdinkite skaičius nuo 10 iki 1 atvirkštine tvarka naudodami for ciklą.

for (let i=10; i>=1; i--) {
    console.log(i)
}

// 3. Spausdinkite kiekvieną lyginį skaičių nuo 0 iki 20 naudodami for ciklą.

for (let i=0; i<=20; i+=2) {
    console.log(i)
}

// 4. Spausdinkite kiekvieną nelyginį skaičių nuo 0 iki 20 naudodami for ciklą.

for (let i=1; i<=20; i+=2) {
    console.log(i)
}

/* 4. Spausdinkite kiekvieną nelyginį skaičių nuo 0 iki 20 naudodami for ciklą.
for (i=0; i<=20; i++) {
    if(i%2!=0) {
        console.log(i);
    }
}

*/

// 5. Išspausdinkite pirmuosius 10 skaičių kvadratų (1^2, 2^2, 3^2 ir t. t.).

for (let i=1; i<=10; i++) {
    console.log(i*i);
}

console.clear();
//6. Išspausdinkite pirmuosius 10 skaičių kubų (1^3, 2^3, 3^3 ir t. t.).

for (let i=1; i<=10; i++) {
    console.log(Math.pow(i, 3));
//    console.log(i*i*i);
}

// 7. Atspausdinkite 7 daugybos lentelę (7 × 1, 7 × 2 ir t. t.).

for (let i=1; i<=10; i++) {
    console.log(`7 x ${i} = ` + 7*i)
}

// 8. Atspausdinkite nuo 1 iki 5 žvaigždučių (*) seriją (pvz., *, **, *** ir t. t.).
let strng = "*";
for (let i=1; i<=5; i++) {
        console.log(strng)
        strng=strng + "*";
    
}

// 9.1A Atspausdinkite atvirkštinę eigą su žvaigždutėmis 5 eilutėse (pvz., *****, ****, *** ir t. t.).

let strngA = "******";
for (let i=1; i<=5; i++) {
        console.log(strngA)
        strngA=strngA.slice(0, -1);
}
console.clear();
// 9.1B ???
 // let strngB = "*";
for (let i = 5; i>=1; i--) {
    let strngB = "";
    for (let n = i; n >=1; n--) {
        strngB = strngB + "*";
    }
    console.log(strngB);
//    let strngB = "*";
}
/*
// 10. Spausdinti skaičius nuo 1 iki 50, kurie dalijasi iš 3.
for (let i=1; i<=50; i++) {
    if (i%3 === 0) {
        console.log(i);
    }
}

// 11.Spausdinti skaičius nuo 1 iki 50 imtinai, kurie dalijasi iš 5.
for (let i=1; i<=50; i++) {
    if (i%5 === 0) {
        console.log(i);
    }
}

console.clear();

// 12. Spausdinti skaičius nuo 1 iki 100, kurie dalijasi ir iš 3, ir iš 5.
/* for (let i = 1; i<=100; i++) {
    if (i%3 === 0) {
        if (i%5 === 0) {
            console.log(i);
                    }
    }

}
*/
/*
for (let i = 1; i<=100; i++) {
    if (i%3 === 0 && i%5 === 0) {
        console.log(i);
    }
}

// 13. Sukurkite for ciklą, kuris penkis kartus išspausdintų "Hello, World!".

for (let i = 1; i<=5; i++) {
    console.log("Hello, World!");
}


// Sunkesnės užduotys:
// 1. Sukurkite for ciklą, kuris spausdina skaičius nuo 1 iki 100, tačiau kiekvieną skaičių, kuris dalijasi iš 4, reikia pakeisti žodžiu „Fizz“.

for (let i = 1; i<=100; i++) {
    if (i %4 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}
 // 2. Spausdinkite skaičius nuo 1 iki 100, bet skaičius, kurie dalijasi iš 3, pakeiskite "Fizz", skaičius, kurie dalijasi iš 5, - "Buzz", o skaičius, kurie dalijasi iš abiejų, - "FizzBuzz


for (let i = 1; i<=100; i++) {
    if (i%3 === 0 && i%5 === 0) {
        console.log('FizzBuzz');
        
    } else if (i%3 === 0) {
        console.log('Fizz');
            } else if (i%5 === 0) {
            console.log ('Buzz') 
                } else console.log(i);
}
*/
// 3. Spausdinkite pirmuosius 10 skaičių Fibonačio sekoje.

let x = 1;
let y = 2; 
let z = 0;
for (let i = 1; i <= 10; i++) {
    if (i === 1) {
        console.log(x);
    } else if (i === 2){
        console.log(y)
         } else {
            z = x + y;
            x = y;
            y = z;
            console.log(z);
            }
}

// 4. Spausdinkite skaičius nuo 1 iki 20 ir prie kiekvieno lyginio skaičiaus spausdinkite "Even", o prie kiekvieno nelyginio - "Odd".

for (let i = 1; i <= 20; i++) {
    if (i%2 === 0) {
        console.log(i + ' Even');
    } else console.log(i + " Odd");
}

// 5. Spausdinti bet kurio pasirinkto skaičiaus daugybos lentelę.

let daugb = 3;
for (let i=1; i<=10; i++) {
    console.log(`${daugb} x ${i} = ` + daugb * i);
}

// 6. Sukurkite for ciklą, kuris spausdina skaičius nuo 1 iki 30, bet tik tuos, kurie dalijasi iš 2 arba 3.

for (let i = 1; i <= 30; i++) {
    if (i % 2 === 0 || i % 3 === 0) {
        console.log(i);
    }
}

// 7. Sukurkite for ciklą, kad patikrintumėte, ar skaičius yra pirminis, ir išspausdintumėte pranešimą.

let pirmin = 113; 
for (let i = 2; i <= pirmin; i++) {
    if ( i < pirmin && pirmin % i === 0 ) {
        console.log(`Skaicius ${pirmin} nera pirminis, dalinasi is ${i}`)
        break;
    } else if (i === pirmin) {
        console.log(`Skaicius ${pirmin} yra pirminis`);
    }
}

// 8. Spausdinkite pirmuosius 10 pirminių skaičių, naudodami for ciklą ir if sąlygas.

function IsPrime (number) {}