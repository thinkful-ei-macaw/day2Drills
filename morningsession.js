/* eslint-disable indent */
'use strict';

//test
const numbers = [1,2,3,4,5,6];

function findMax(numbers){
    let i = 0;
    let max = numbers[0];
    while (i < numbers.length){
        if (numbers[i] > max){
            max = numbers[i];
        }
        i++;    
    }
    return max;
}
console.log(findMax(numbers));

function findMin(numbers){
    let i = 0;
    let min = numbers[0];
    while (i < numbers.length){
        if (numbers[i] < min){
            min = numbers[i];
        }
        i++;    
    }
    return min;
}

console.log(findMin(numbers));

const nums = [4,8,2,9,4,1];

function average(arr){

 let total = 0;
    arr.forEach(function(grade){
    total += grade;
    });
return total/arr.length;
}

console.log(average(nums));




