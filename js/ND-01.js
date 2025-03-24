// Namu darbas #01
const num1 = 50;
const num2 = 30;
const num3 = 50;

console.log(num1);
console.log(num2);
console.log(num3);

console.clear();

const name1 = "Labas";
const name2 = "Rytas";
const name3 = "Vakaras";

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

// a. Didziausias
const Didz = "didziausias";
function BiggestN (nmbr)
{
    console.log(nmbr + ` yra ${Didz} skaicius`);
}

if((num1 > num2) && (num1 > num3)) {
BiggestN(num1);
} else if((num2 > num1) && (num2 > num3)) {
    BiggestN(num2);
    } else BiggestN(num3);

// b.Maziausias

const Maz = "maziausias";
function SmallestN (nmbr)
{
    console.log(nmbr + ` yra ${Maz} skaicius`);
}

if ((num1 < num2) && (num1 < num3)) {
    SmallestN(num1)
} else if ((num2 < num1) && (num2 < num3)) {
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
// Išvesti teksto tipo kintamųjų ilgius

function TextLen (txt)
{
    let L0 = (txt[0]).length;
    console.log(L0 + " ")
    let L1 = (txt[1]).length;
    console.log(L1 + " ")
    let L2 = (txt[2]).length;
    console.log(L2 + " ")
    let L3 = (txt[3]).length;
    console.log(L3 + " ")
    let L4 = (txt[4]).length;
    console.log(L4 + " ")
}
TextLen(txt1);
TextLen(txt2);

