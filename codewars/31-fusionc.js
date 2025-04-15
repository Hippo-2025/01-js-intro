/*
A laboratory is testing how atoms react in ionic state during nuclear fusion. They introduce different elements with Hydrogen in high temperature and pressurized chamber. Due to unknown reason the chamber lost its power and the elements in it started precipitating
Given the number of atoms of Carbon [C],Hydrogen[H] and Oxygen[O] in the chamber. Calculate how many molecules of Water [H2O], Carbon Dioxide [CO2] and Methane [CH4] will be produced following the order of reaction affinity below

1. Hydrogen reacts with Oxygen   = H2O
2. Carbon   reacts with Oxygen   = CO2
3. Carbon   reacts with Hydrogen = CH4
*/

function burner(c, h, o) {
    let water = 0;
    let co2 = 0;
    let methane =0;
    let remo = o;
    let remh = h;
    let remc = c;
    if (h >= 2 && o >=1) {
        if (h/2 >= o) {
        water = o;
        remh = h-o*2;
        remo = 0;
        } else {
        water = Math.floor(h/2);
        remo = o-Math.floor(h/2)
        remh = 0;
        }
        console.log(remo);
        console.log(remh);
    } else {
        // Not enough H or/and O to make water.
    }
    if (remo >= 2 && c >=1) {
        if (remo/2 >= c) {
        co2 = c;
        remc = 0;
        remo = remo - c*2;
        } else {
            co2 = Math.floor(remo/2);
            remo = 0;
            remc = c - Math.floor(remo/2);
        }
    } else {
        // Not enough C or/and O to make CO2.
    }
    if (remc >= 1 && remh >=4) {
        if (remh/4 >= remc) {
            methane = remc;
        } else {
            methane = Math.floor(remh/4);
        }
    } else {
        // Not enough C or/and H to make Methane.
    }
 
    return [water, co2, methane];
}

 // SOLS

 const burner = function(carbon, hydrogen, oxygen) {
  
    const H2O = Math.min(oxygen, parseInt(hydrogen / 2))
    const CO2 = Math.min(carbon, parseInt((oxygen - H2O) / 2))
    const CH4 = Math.min(carbon - CO2, parseInt((hydrogen - H2O * 2) / 4))
  
    return [ H2O, CO2, CH4 ]
  }

  with(Math)
var burner = (C, H, O) => {
  const water = min(O, H >> 1)
  H -= water << 1, O -= water
  const CO2 = min(C, O >> 1)
  C -= CO2, O -= CO2 << 1
  const methane = min(C, H >> 2)
  return [water, CO2, methane]
}