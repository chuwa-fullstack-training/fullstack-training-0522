// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    let maxVal=Number.MIN_VALUE;
    for(val of list){
        if(maxVal<val){
            maxVal = val;
        }
    }
    return maxVal;
}

let arr1 = [1, 3, 12, 4, 6, 7];
console.log(largestElement(arr1));

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    len = list.length;
    let start = 0;
    let end = len-1;
    
    while (start<end) {
        var temp = list[start];
        list[start] = list[end];
        list[end] = temp;
        start=start+1;
        end=end-1;
    }
    
    return list;
}

let arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log(reverseList(arr2));

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    var count = 0;
    for(let i = 0; i < list.length; i++) {
        if(list[i] == element) {
            count++;
            if(count>=2) {
                return true;
            }
        }
    }
    return false;
}

let arr3 = [1, 2, 3, 4, 2, 6, 7];
console.log(checkTwice(arr3, 2));