//1. užd. Padarykite funkciją, kuriai perdavus vieną iš (akmuo, popierius, šulinys) reikšmių, kompiuteris su jumi sužaistų vaskiči raundą ir išvestų rezultatą į console. Kompiuterio pasirinkimai turi būti atsitiktiniai

function game (val) {
    const mass = ['akmuo', 'popierius', 'šulinys'];
    let winner = 3; // 0 - winner is comp., 1 - winner is player, 2 - tie
    let rand = mass[Math.floor(Math.random() * 3)];
    console.log(rand);
    
    
    if (val === rand) {
       // return console.log('Its a tie');
        winner = 2;
    } else if (val === mass[0] && rand === mass[1]) {
        winner = 0;
    } else if (val === mass[0] && rand === mass[2]) {
        winner = 1;
    } else if (val === mass[1] && rand === mass[0]) {
        winner = 1;
    } else if (val === mass[1] && rand === mass[2] ) {
        winner = 0;
    } else if (val === mass[2] && rand === mass[0] ) {
        winner = 0;
    } else if (val == mass[2] && rand === mass[1]) {
        winner = 1;
    }
           
    return winner;
}

//console.log((game('akmuo')) === 2 ? 'Its a tie' :  0 ? 'Winner is comp' : 'Winner is a player' );
let ats = game('akmuo')

console.log((ats) === 2 ? 'Its a tie' : ats=== 0 ? 'Winner is comp' : 'Winner is a player' );

// //2 užd Parašykite funkcija, kuri parodytų kiek žmonių reikia norint pakelti tam tikro svorio krovinį, kai vienas žmogus gali pakelti x kg. Pvz: 10kg svorį turi kelti 5 žmonės, jei vienas jų gali pakelti 2.4 kg

function kiekzm (masse, svr) {
    let kiek = Math.ceil(masse / svr);
    return kiek;
}

console.log(kiekzm(10,2.4));
console.log(kiekzm(10,3));
console.log(kiekzm(10,5));

//3 užd a) Statybos. Yra planuojamas namo statymas. Parašykite funkciją, kuri, gavusi norimą namo aukštį, grąžintų kiek aukštų turės namas. Namo aukštis yra paduodamas tik sveiku skaičiumi. Vieno aukšto aukštis gali būti 2 arbe 2.5m aukščio. Vadinasi, 6 metrų namas turės 3 aukštus (po 2 m), o 5 metrų namas turės 2 aukštus (po 2.5). Taupant vietą yra dedamas prioritetas didesniam aukštų skaičiui - jei namo aukštis yra 10 metrų, jis turės 5 2m aukštus. Jei namas yra 7 metrų aukščio, jis turės 2 aukštus 2.5 aukščio ir vieną 2 metrų aukščio aukštą.

function aukstusk (metru) {
    let kiek = 0;
    if (metru % 2 === 0) {
        kiek = metru / 2;
    } else kiek = (metru - 5) / 2 + 2;
 
    return kiek;
}

console.log(aukstusk(7));
console.log(aukstusk(10));
console.log(aukstusk(13));





