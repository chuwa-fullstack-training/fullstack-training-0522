// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.

function doubled(arr){
    return arr.map(num=>num*2);
}

const arr = [1,2,3,6]
console.log(doubled(arr));

// 2. Given an array of numbers, return an array of numbers that are even.

function checkEven(arr){
    return arr.filter(x=>x%2==0);
}
console.log(checkEven(arr));

// 3. Reverse the string: "Hello World" -> "dlroW olleH"

function reverse(arr){
    return arr.split("").reduce((accum, cur)=>
        cur+accum
    );
}
console.log(reverse("Hello World"));

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 * 
 * 
 */

function flatten(arr){
    return arr.reduce((accum, cur)=>{
            if(cur instanceof Array){
                return accum.concat(flatten(cur));
            }else{
                return accum.concat(cur);
            }
    },
    
    [])
   
}


const arr1 = [[0, 1], [2, 3], [4, 5]];
// Expected output: [0, 1, 2, 3, 4, 5]
console.log(flatten(arr1));
//  * Example 2:
const arr2 = [[0, 1], [4, [5, 6]]];
// Expected output: [0, 1, 2, 3, 4, 5, 6]

console.log(flatten(arr2));