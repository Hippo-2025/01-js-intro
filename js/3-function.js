function empty () {
    //logika
}
empty();
const a = empty();
console.log(a);

function penki() {
    return 5;
    }

    const c = penki();
    console.log(c);

    function hi() {
        return 'Labas';
    }
    const d = hi();
    console.log(d);
    
    //Jonas -> Labas, Jonas!
    
    function hiPerson(name) {
        //return 'Labas, ' + name + '!';
        return ` Labas, ${name}!`;

    }

    console.log(hiPerson("Jonas"))

    // 2+2=4

    function sum(num1, num2) {
        return num1 + num2;
    }

    const e = sum();
    console.log(e);

    //100 -> 121 Eur
    //200 -> 242 Eur

    function priceWithVAT(price) {
        const updatedPrice = price * 1.21;
        return updatedPrice + 'Eur';
    }

    const p1 = priceWithVAT(100);
    console.log(p1);

    const p2 = priceWithVAT(200);
    console.log(p2); 

    console.clear();

//Jonas -> Zodis "Jonas" yra sudarytas is 5 rai\dziu
//Maryte -> Zodis "Maryte" yra sudarytas is 6 raidziu

function nameLength(name) {
    const size = name.Length;
    return 'Zodis "${name}" yra sudarytas is ${size} raidziu.'
}
const nl1 = nameLength("Jonas");
const nl2 = nameLength("Maryte");
const nl3 = nameLength("Petras");



console.log(nl1);
console.log(nl2);
console.log(nl3);

function gotNumber(n) {
   // return 'Gautas skaicius: ' + n + '.';
   return `Gautas skaicius: ${n}.`
}
const gn1 = gotNumber(5);
const gn2 = gotNumber(-13);
const gn3 = gotNumber(777);

console.log(gn1);
console.log(gn2);
console.log(gn3);

// 2, 2 -> 2 + 2 =4
// 7, 5 -> 7 + 5 =12
// -7, 15 -> -7 +15 =8 

function sum(a, b) {
    const result = a + b;
    return `${a} + ${b} = ${result}`;
}
console.log(sum(2, 2));
console.log(sum(7, 5));

// ND - perdaryti analogiskai su -, * ir / operacijomis;

