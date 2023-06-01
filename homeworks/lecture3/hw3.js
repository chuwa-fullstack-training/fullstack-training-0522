function counter() {
    var count = 0;
    return function(val = 0) {
        return count += val;
    }
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8