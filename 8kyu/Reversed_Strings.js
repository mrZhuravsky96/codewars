// Complete the solution so that it reverses the string passed into it.

const str1 = "hello";
function solution(str){
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}   
console.log(solution(str1)) //"olleh"