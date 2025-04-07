function friend(friends){
    let ListL = friends.length;
    let Friends4 = [];
    
    for (let i = 0; i < ListL; i++) {
      if (friends[i].length === 4) {
                Friends4.push(friends[i]);
          }
    } 
     return(Friends4);
  }

console.log(friend(["Ryan", "Kieran", "Jason", "Yous", "Jhon"]));
console.log(friend(["Peter", "Stephen", "Joe"]));

