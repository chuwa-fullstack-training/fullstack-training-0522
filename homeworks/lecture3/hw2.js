/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */

// sum()() means sum() return a function, then call this function

// use rest operator ..args
function sum(...args) {
    // implement here
    if (args.length === 2) {
        return args[0] + args[1];
    } else if (args.length === 1) {
        return function (num) {
            return args[0] + num;
        }
    }
}

// use arguments object
function sum() {
    if (arguments.length === 2) {
        return arguments[0] + arguments[1];
    } else if (arguments.length === 1) {
        return function (num) {
            return arguments[0] + num;
        }
    }
}

console.log(sum(2)(3) === 5)
console.log(sum(2, 3) === 5)