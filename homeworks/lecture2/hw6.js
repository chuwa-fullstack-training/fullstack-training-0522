// Algorithms
var array = [2, 3, 1, -1, 0];
//var array = [];
//var array = [2, -0.5, 100, 3];
//var array = [1, 1, 1, 2, 2, 3];

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    if (list.length){
    var max = -Infinity;
        for (i in list){
            if (list[i] >= max){
            max = list[i];
            }
        }
        return max;
    }
        //else
        return null;
    
    
}
//console.log(largestElement(array));

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    if (list.length){
        for (let i = 0; i < Math.ceil(list.length / 2); i++){
            console.log(i);
            let temp = list[i];
            list[i] = list[list.length - 1 - i];
            list[list.length - 1 - i] = temp;
        }
        return list;
    }
        //else
        return [];
    
}
//console.log(reverseList(array));

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    if (list.length){
        let occur = 0;
        for (i in list){
            if (list[i] === element){
                occur++;
            }
        }
        return (occur >= 2);
    }
    //else
    return false;
}
/*console.log(checkTwice(array, 2));
console.log(checkTwice(array, "2"));
console.log(checkTwice(array, 3));
console.log(checkTwice(array, 4));
console.log(checkTwice(array, 1));*/
