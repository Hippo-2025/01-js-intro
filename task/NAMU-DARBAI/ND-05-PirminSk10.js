// 8. Spausdinkite pirmuosius 10 pirminių skaičių, naudodami for ciklą ir if sąlygas.


let PirminSk = 0;
function IsPrime (number) 
{

    for (let i = 2; i <= number; i++) {
        if ( i < number && number % i === 0 ) {
//            console.log(`Skaicius ${number} nera pirminis, dalinasi is ${i}`)
            break;
        } else if (i === number) {
            console.log(`Skaicius ${number} yra pirminis`);
            PirminSk++;
            return(number);
        }
    }
}
for (let i = 0; PirminSk < 10; i++)
{
    IsPrime(i);
    if (PirminSk === 10) {
        console.log(PirminSk);
    }
}
