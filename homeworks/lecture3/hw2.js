/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */

//comment out one another when test
function sum(num1, num2) {
    // implement here
    if(arguments.length == 2)
        return num1 + num2;
    //else
    return function (num2) {
        return num1 + num2;
    }
}
console.log(sum(2, 3) === 5);
console.log(sum(2)(3) === 5);
