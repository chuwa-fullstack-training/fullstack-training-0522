/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(a, b = 0) {
    // implement here
    let sum = a + b;
    
    return b ? sum : function f(c = 0) {
        return a + b + c;
    };
}

console.log(sum(2)(3));
console.log(sum(2, 3));