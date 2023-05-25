// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    var maxv = Number.NEGATIVE_INFINITY;
    for(let x of list) {
        maxv = Math.max(maxv, x);
    }
    return maxv;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    for(let i = 0, j = list.length - 1; i < j; i++, j--) {
        let tmp = list[i];
        list[i] = list[j];
        list[j] = tmp;
    }
    return list;
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    var cnt = 0;
    for(let x of list) {
        if(x == element) cnt++;
        if(cnt > 1) return true;
    }
    return false;
}