// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


const ar1 = [9, 3, '7', '3']

function sumMix(array){
    return array.reduce((acc, curr) => acc + Number(curr), 0);


}
console.log(sumMix(ar1)) //22