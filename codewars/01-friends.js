function friend(friends){
    let ListL = friends.length;
    let FriendsC = 0;
    let Friends4 = [];
    
    for (let i = 0; i < ListL; i++) {
      if (friends[i].length === 4) {
        FriendsC++;
        Friends4 += ('"' + friends[i] + '", ')
         }
    } 
    return(Friends4);
  }

console.log(friend(["Ryan", "Kieran", "Jason", "Yous", "jhon"]));
console.log(friend(["Peter", "Stephen", "Joe"]));

