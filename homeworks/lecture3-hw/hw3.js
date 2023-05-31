function counter() {
    // implement here
    var result = 0;
    return function (x = 0){
        result += x;
        return result;
    }
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8