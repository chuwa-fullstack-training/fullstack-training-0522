function counter() {
    // implement here
    var result = 0;

    //return a function without name
    return function (num = 0){
        return result += num;
    }
    
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8
//if there is extra () than defined, think about return a function
