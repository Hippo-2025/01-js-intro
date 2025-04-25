/* Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more. */

function peopleWithAgeDrink(old) {
    let drink = '';
    if (old >= 21) {
        drink = 'drink whisky';
    } else if (old < 21 && old >= 18) {
            drink = 'drink beer';
    } else if (old < 18 && old >= 14) {
            drink = "drink coke";
    } else {
            drink = 'drink toddy';
    }
    return drink;
  }

  // sols
  const peopleWithAgeDrink = (age) =>
    age < 14 ? "drink toddy" :
    age < 18 ? "drink coke" :
    age < 21 ? "drink beer" : "drink whisky"

var peopleWithAgeDrink = function(old) {
        if (old>=21) return 'drink whisky';
        if (old>=18) return 'drink beer';
        if (old>=14) return 'drink coke';
        return 'drink toddy';
};

const peopleWithAgeDrink = (age) => {
    switch (true) {
      case (age >= 21): return 'drink whisky'
      case (age >= 18): return 'drink beer'
      case (age >= 14): return 'drink coke'
      default: return 'drink toddy'
    }
  };
