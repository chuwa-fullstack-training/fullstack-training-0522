function counter(val) {
    // implement here
    let ans = 0;

    return function(val){
        if(arguments.length!=0) ans+=val;
        return ans;
    }


}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8