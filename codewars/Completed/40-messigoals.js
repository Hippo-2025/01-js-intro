/* Messi goals function
Messi is a soccer player with goals in three leagues:
omplete the function to return his total number of goals in all three leagues.
*/

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  }

  // sols

  const goals = (...a) => a.reduce((s, v) => s + v, 0);
  
