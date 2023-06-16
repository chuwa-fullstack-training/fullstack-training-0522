/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(...args) {
  // implement here
  if (args.length == 1) {
    return function (y) {
      return args[0] + y;
    };
  }
  if (args.length == 2) {
    return args[0] + args[1];
  }
}

console.log(sum(2)(3) === 5);
console.log(sum(2, 3) === 5);
