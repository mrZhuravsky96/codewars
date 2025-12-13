// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

const array1 = [2, 2, 3];
const array2 = [4, 5, 6];

function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((acc, curr) => acc + curr, 0) + arr2.reduce((acc, curr) => acc + curr, 0);
}
console.log(arrayPlusArray(array1, array2)) //21

function arrayPlusArray2(arr4, arr5) {
    let sum = 0;
    for (let i = 0; i < arr5.length; i++) {
        sum += arr4[i] + arr5[i];
    }
    return sum;
}
console.log(arrayPlusArray2(array1, array2)) //21


