// 7# Jumping Kangaroos

/* Two kangaroos are jumping on a line. They start out at different points on the line, and jump in the same direction at different speeds. Your task is to determine whether or not they'll ever land in the same spot at the same time (you'll just have to suspend disbelief for a moment and accept that two kangaroos, for the purpose of this kata, can occupy the same space at the same time :)

Your function is given four arguments (kanga1, rate1, kanga2, rate2); the first kangaroo's starting point, the first kangaroo's speed, the second kangaroo's starting point, and the second kangaroo's speed.

Return true if the above conditions are met, else false. Starting location and speed may vary wildly. The first kangaroo will usually start behind the second one and travel faster, but not always. Starting locations may be negative, but speeds will always be > 0.
*/

function kangaroo(kanga1, rate1, kanga2, rate2) {
    let meet = false;
    let difSpeed = 0;
    let difDist = 0;
    let howmanyJumps = 0;
    if ((((kanga1-kanga2) < 0) && rate1 < rate2) || (((kanga2-kanga1) < 0) && rate2 < rate1)) {
        console.log(`The kangaro that started behind has slower pace, thus will never catch up with another one`);
        return meet;
    } else if ((((kanga1-kanga2) < 0) && rate1 > rate2)) {
        difSpeed = rate1 - rate2;
        difDist = Math.abs(kanga2-kanga1);
        howmanyJumps = difDist/difSpeed;
        console.log(howmanyJumps-Math.floor(howmanyJumps));
        if (howmanyJumps-Math.floor(howmanyJumps) === 0 ) {
            meet = true;
        }
    }
    return meet;
}

console.log(kangaroo(0,9,16,4));
console.log(kangaroo(1571,4240,9023,4234));


// BETTER SOLUTIONS

function kangaroo(kanga1, rate1, kanga2, rate2) {
    var jumps = (kanga2 - kanga1) / (rate1 - rate2);
    return ((jumps - Math.floor(jumps)) != 0 || jumps < 0) ? false : true;
  }


function kangaroo(kanga1, rate1, kanga2, rate2)
{
  let x = (kanga1 - kanga2) / (rate2 - rate1);
  return Number.isInteger(x) && x > 0;
}

kangaroo=(a,b,c,d,e=(a-c)/(d-b))=>e>0&&e==~~e  // ??? e==~~e

