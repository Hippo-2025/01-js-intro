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
    console.log('winner is ' + winner);
       
    return winner;
}

//console.log((game('akmuo')) === 2 ? 'Its a tie' :  0 ? 'Winner is comp' : 'Winner is a player' );
let ats = game('akmuo')

console.log((ats) === 2 ? 'Its a tie' : ats=== 0 ? 'Winner is comp' : 'Winner is a player' );


