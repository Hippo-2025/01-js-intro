// 8# Reverse List Order
// In this kata you will create a function that takes in a list and returns a list with the reverse order.

function reverseList(list) {
    return list.reverse();
}

console.log(reverseList([1,2,3,4]));

// OTHER SOLS

const reverseList = list => list.reverse();

function reverseList(list) {
    return [...list].reverse();
  }
  