// Sum of positive
// You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
let sumP = 0;
let len = arr.length;
for (i = 0; i < len; i++) {
    if(arr[i] > 0) {
        sumP += arr[i];
    }
}
return sumP;
}
