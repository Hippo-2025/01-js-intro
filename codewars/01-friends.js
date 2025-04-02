function friend(friends){
    let ListL = friends.length;
    let FriendsC = 0;
    console.log(ListL);
    for (let i = 0; i < ListL; i++) {
      if (friends[i].length === 4) {
        FriendsC++;
        console.log(friends[i]);
    
      }
    }
  }

friend(["Ryan", "Kieran", "Jason", "Yous", "jhon"]);
