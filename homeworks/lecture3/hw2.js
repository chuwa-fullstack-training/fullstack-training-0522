/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(number1, number2) {
    // implement here
    if(arguments.length===1) return function (number) {
        return number + number1;
      };
    else{
        return number1 + number2;
      }
    
}


console.log(sum(2)(3) === 5)
console.log(sum(2, 3) === 5)