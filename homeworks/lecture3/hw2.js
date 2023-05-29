/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(a, b) {
  return b // check whether b defined?
    ? a + b 
    : function (b) {
        return a + b ?? 0;
      };
}

console.log(sum(2)(3) === 5);
console.log(sum(2, 3) === 5);
