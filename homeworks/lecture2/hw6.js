// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    let maxVal=Number.MIN_VALUE;
    for(val in list){
        if(maxVal<val){
            maxVal = val;
        }
    }
    return maxVal;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    let len = list.length;
    if(len%2==0){
        for(let i=0;i<len/2;i++){
            
        }
    }
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
}