// Who likes it?
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

function likes(names) {
    let len = names.length;
    if(len === 0) {
        console.log(len);
        console.log(`no one likes this`);
    } else if (len === 1) {
        console.log(`${names[0]} likes this`);
    } else if (len === 2) {
        console.log(`${names[0]} and ${names[1]} likes this`);
    } else if (len ===3 ) {
        console.log(`${names[0]} , ${names[1]} and ${names[2]} like this`);
    } else if (len >= 4) {
        console.log(`${names[0]} , ${names[1]} and ${len - 2} others like this`);
    }
}
