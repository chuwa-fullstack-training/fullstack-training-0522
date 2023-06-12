function counter() {
    // implement here
    // initialize sum as 0
    let sum = 0;

    // return a function that takes another number
    return (num) => {
        if (num) sum += num;
        return sum;
    }
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8