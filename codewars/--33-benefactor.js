/* #7
The association is funded through financial donations from generous benefactors. John has a list of the first n donations: [14, 30, 5, 7, 9, 11, 15] He wants to know how much the next benefactor should give to the association so that the average of the first n + 1 donations should reach an average of 30. After doing the math he found 149. He thinks that he could have made a mistake.
Task
The function should return the expected donation (rounded up to the next integer) that will permit to reach the average.

Should the last donation be a non positive number (<= 0) John wants us either to throw an error or return such value so he will clearly see that his expectations are not great enough
*/

function newAvg(arr, newavg) {   // how to use THROW, TRY, CATCH , FINALLY?
    let newdon = 0;
    let total =0;
    let len = arr.length+1;
    for (const don of arr) {
        total += don;
    }
    newdon = newavg*len - total;
    if (total/(len-1) > newavg) {
        return (`${newdon}, Expected New Average is too low`);
    } 
    if (arr[len-2] < 0) {
        return "Error";
    }
    return newdon;
}

console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 2));
