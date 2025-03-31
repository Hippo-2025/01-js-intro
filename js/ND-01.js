// Namu darbas #01
const num1 = 50;
const num2 = 30;
const num3 = 50;

console.log(num1);
console.log(num2);
console.log(num3);

console.clear();

// Sukurti 3 kintamuosius su teksto tipo reikšmėmis

const name1 = "Labaas";
const name2 = "Rytaas";
const name3 = "Vakaaaar";

console.log(name1)
console.log(name2)
console.log(name3)

console.clear();

const list1 = [1,2,3,4,5];
const list2 = [10, 20, 30, 40, 50];
const list3 = [-1, 0, 0.5, 2/3, -10];

console.log(list1)
console.log(list2)
console.log(list3)

console.clear();

const txt1 = ['aaaaaa1', 'b', 'c', 'd', 'e'];
const txt2 = ['a2', 'b2', 'c2', 'd2', 'e2'];
const txt3 = ['A', 'Bb', 'Cccc', 'Ddddddd', 'Eeeeeeeee'];

console.log(txt1)
console.log(txt2)
console.log(txt3)

console.log(txt1[0],txt1[1], txt1[2], txt1[3], txt1[4])
console.log(txt2[0],txt2[1], txt2[2], txt2[3], txt2[4])
console.log(txt3[0],txt3[1], txt3[2], txt3[3], txt3[4])

console.clear();

// ND#02

let SumN = (num1+ num2+ num3);
console.log(SumN);

function AllText (txt)
{
    console.log(txt[0] +" " + txt[1] + " " + txt[2] + " " + txt[3] + " " +txt[4]);
}

AllText(txt1)
AllText(txt2)
AllText(txt3)

console.clear();

function NumSum (list)
{
    console.log(list[0]-list[1]+list[2]-list[3]+list[4]);
}

NumSum(list1)
NumSum(list2)
NumSum(list3)

console.clear();

function BackwText (string)
{
    console.log(string[4] +",", string[3]+",", string[2]+",", string[1]+",", string[0]);
}

BackwText(txt1)
BackwText(txt2)
BackwText(txt3)

console.clear();

// ND#3

const Big = 100;
const Small = 3;

if(Big > Small) {
    console.log("Pomidoras")
} else {
    console.log("Bandykite kitą kartą. ")
}

console.clear();

// Skaiciu palyginimai

// a. Didziausias $ b.Maziausias
const Didz = "didziausias";
const Maz = "maziausias";

function BiggestN (nmbr)
{
    console.log(nmbr + ` yra ${Didz} skaicius`);
}

if((num1 >= num2) && (num1 >= num3)) {
BiggestN(num1);
} else if((num2 >= num1) && (num2 >= num3)) {
    BiggestN(num2);
    } else BiggestN(num3);

// b.Maziausias

function SmallestN (nmbr)
{
    console.log(nmbr + ` yra ${Maz} skaicius`);
}

if ((num1 <= num2) && (num1 <= num3)) {
    SmallestN(num1)
} else if ((num2 <= num1) && (num2 <= num3)) {
        SmallestN(num2)
} else SmallestN(num3);

// c. & d. Ar jie lygus ar nelygus?

if ((num1!==num2) && (num1!==num3) && (num2!==num3)) {
    console.log("Visi skaicia nelygus")
} else if (num1===num2) {
        console.log("Num1 lygus Num2 =" + num1)
    } else if (num1===num3) {
        console.log("Num1 lygus Num3 =" + num1)
        } else if (num2===num3) {
            console.log("Num2 lygus Num3 =" + num2)
        }
// e. Kuris dydesnis arba lygus
if ((num1 === num2) && (num1 > num3) ) {
    console.log(`Num1 ir Num2 yra lygus ir didziausi`, num1)
}
if ((num1 === num3) && (num1 > num2) ) {
    console.log(`Num1 ir Num3 yra lygus ir didziausi`, num1)
}
if ((num2 === num3) && (num3 > num1) ) {
    console.log(`2 ir Num3 yra lygus ir didziausi`, num2)
}

// f. Kuris mazesnis arba lygus
if ((num1 === num2) && (num1 < num3) ) {
    console.log(`Num1 ir Num2 yra lygus ir maziausi`, num1)
}
if ((num1 === num3) && (num1 < num2) ) {
    console.log(`Num1 ir Num3 yra lygus maziausi`, num1)
}
if ((num2 === num3) && (num3 < num1) ) {
    console.log(`Num2 ir Num3 yra lygus ir maziuausi`, num2)
}

console.clear();

// 2. Išvesti teksto tipo kintamųjų ilgius

let nameL_1 = name1.length
let nameL_2 = name2.length
let nameL_3 = name3.length
console.log(nameL_1);
console.log(nameL_2);
console.log(nameL_3);

// 3. Tarpusavyje palyginti teksto tipo kintamųjų ilgius: 
// 3.a kuris didesnis

if((nameL_1 >= nameL_2) && (nameL_1 >= nameL_3)) {
    BiggestN(nameL_1);
    } else if((nameL_2 >= nameL_1) && (nameL_2 >= nameL_3)) {
        BiggestN(nameL_2);
        } else BiggestN(nameL_3);

// 3.b kuris mazesnis

if ((nameL_1 <= nameL_2) && (nameL_1 <= nameL_3)) {
    SmallestN(nameL_1)
} else if ((nameL_2 <= nameL_1) && (nameL_2 <= nameL_3)) {
        SmallestN(nameL_2)
    } else SmallestN(nameL_3);

// 3 c. & d. Ar jie lygus ar nelygus?

if ((nameL_1!==nameL_2) && (nameL_1!==nameL_3) && (nameL_2!==nameL_3)) {
    console.log("Visi zodziai nelygus")
} else if (nameL_1===nameL_2) {
        console.log(`${name1} lygus ${name2} =` + nameL_1 + " raides")
    } else if (nameL_1===nameL_3) {
        console.log(`${name1} lygus ${name3} =` + nameL_1 + " raides")
        } else if (nameL_2===nameL_3) {
            console.log(`${name2} lygus ${name3} =` + nameL_2 + " raides")
        }

// 3 e. Kuris dydesnis arba lygus

if ((nameL_1 === nameL_2) && (nameL_1 > nameL_3) ) {
    console.log(`${name1} ir ${name2} yra lygus ir didziausi`, nameL_1)
}
if ((nameL_1 === nameL_3) && (nameL_1 > nameL_2) ) {
    console.log(`${name1} ir ${name3} yra lygus ir didziausi`, nameL_3)
}
if ((nameL_2 === nameL_3) && (nameL_3 > nameL_1) ) {
    console.log(`${name2} ir ${name3} yra lygus ir didziausi`, nameL_2)
}

// 3 f. kuris mažesnis arba lygus

if ((nameL_1 === nameL_2) && (nameL_1 < nameL_3) ) {
    console.log(`${name1} ir ${name2} yra lygus ir maziausi `, nameL_1)
}
if ((nameL_1 === nameL_3) && (nameL_1 < nameL_2) ) {
    console.log(`${name1} ir ${name3} yra lygus maziausi`, nameL_3)
}
if ((nameL_2 === nameL_3) && (nameL_3 < nameL_1) ) {
    console.log(`${name2} ir ${name3} yra lygus ir maziuausi`, nameL_2)
}


console.clear();

//  4. Išvesti sąrašo tipo kintamųjų ilgius


function TextLen (txt)
{
    let L0 = (txt[0]).length;
    let L1 = (txt[1]).length;
    let L2 = (txt[2]).length;
    let L3 = (txt[3]).length;
    let L4 = (txt[4]).length;

    console.log(L0 + " " + L1 + " " + L2 + " " + L3 + " " + L4 );
}
TextLen(txt1);
TextLen(txt2);
TextLen(txt3);

console.clear();


for (let i=0; i<=20; i++) {
        if(i%3===0) {
            console.log(i)
        }

}

