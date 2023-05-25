// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    maxEle = -Infinity
    list.forEach(element => {
        if (element > maxEle){
            maxEle = element
        }
    });
    return maxEle
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    for (let i = 0; i < Math.floor(list.length / 2); i += 1){
        let tmp = list[i];
        list[i] = list[list.length-1-i];
        list[list.length-1-i] = tmp;
    }
    console.log(list)
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    var times = 0;
    for (let num of list){
        if (num === element){
            times += 1
        }
        if (times === 2){
            return true
        }
    }
    return false
}