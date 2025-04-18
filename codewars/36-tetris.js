// 7 kyu Tetris Series #1 — Scoring System

function getScore(arr) {
    let score = 0;
    let tetlscr = 0;
    switch (tetlscr) {
        case 0: return 0;
        case 1: return 40;
        case 2: return 100;           
        case 3: return 300;           
        case 4: return 1200;
    }
    console.log(tetlscr(3));
}
 /*   
    for (let i =0; i < arr.length; i++) {
        score += tetlscr(arr[i]);
    }

    return score;
  }

  console.log(getScore([0, 1, 2, 3, 4]))
  console.log(getScore([0, 1, 1, 3, 0, 2, 1, 2]))
  console.log(getScore([2, 0, 4, 2, 2, 3, 0, 0, 3, 3]))
  console.log(getScore([0], 0))
  console.log(getScore([], 0));
*/