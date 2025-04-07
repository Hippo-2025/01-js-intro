function check(a, x) {
    let itHas = false;
    let howMany = a.length;
    for (i = 0; i < howMany; i++) {
      if (a[i] === x) {
            itHas = true;
      } 
    }
    console.log(itHas);
    return(itHas);
  }
  
check([66, 101], 66);
check([101, 45, 75, 105, 99, 107], 107);
check(['what', 'a', 'great', 'kata'], 'kat');


