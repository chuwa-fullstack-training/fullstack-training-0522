// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here

    /* for loop */
    var x = 0;
    for (var i=0; i<list.length; i++) {
        if (list[i] > x) {
            x = list[i];
        } 
    }
    return x;

    /* reduce */
    return list.reduce(function(prev, cur) {
    return prev > cur ? prev : cur; 
    })

    /* Math.max */
    return Math.max(...list);
    // since Math.max only takes numbers (not array), so we use spread operator to expand the list into individual numbers
}

// test
list = [2,10,4,6,3]
console.log(largestElement(list));

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here

    /* use reduce */
    return list.reduce((newArray, cur) => {
        newArray.unshift(cur);
        return newArray;
    }, [])

    /* use concat */
    return list.reduce((prev, curr) => [curr].concat(prev), [])

    /* use spread syntax */   
    return list.reduce((prev, curr) => [curr, ...prev], [])
}

// test
console.log(reverseList(list))

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here

    /* use filter */
    const time = list.filter(item => item === element).length;
    let result;
    if (time >= 2) {
        result = true; 
    } else {
        result = false;
    }
    return result; 
}

// test 
list2 = [2,2,2,10,4,6,3]
console.log(checkTwice(list2, 2))