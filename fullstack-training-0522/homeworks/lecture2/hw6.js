// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    let ans = Number.MIN_VALUE;
    for(let i of list){
        ans = Math.max(i,ans);
    }
    return ans;
}

console.log(largestElement([1,2,3,4,5]));

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    let length = list.length;
    for(let i = 0;i<list.length/2;i++){
        let temp = list[i];
        list[i] = list[length-i-1];
        list[length-i-1] = temp;
    }
    return list;
}

console.log(reverseList([2,8,4,5,10]));

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let num  = 0;
    for(let i of list){
        if(i==element) num++;
        if(num>1) return true;
    }
    return false;
}

console.log(checkTwice([2,3,434324,34,4,2],2))