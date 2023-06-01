/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(...args) {
    switch (args.length) {
        case 0:
            return 0; // undef?
        case 1:
            return function(y) {
                return args[0] + y;
            }
        default:
            return args[0] + args[1];
    }
}
console.log(sum(2)(3) === 5)
console.log(sum(2, 3) === 5)