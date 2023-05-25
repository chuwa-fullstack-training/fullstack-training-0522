// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    res = -Infinity
    for (let num of list){
        res = Math.max(num, res)
    }
    return res
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    let l = 0, r = list.length - 1
    while (l < r){
        // list[l],list[r] = list[r],list[l];
        let temp = list[l];
        list[l] = list[r];
        list[r] = temp;
        l ++;
        r --;
    }
    return list
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let flag = 0
    for (num of list) {
        if (num === element) {
            flag ++;
        }
    }
    return flag > 1
}