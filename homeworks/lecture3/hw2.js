/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(x=0, y=0) { // if not set default number here, will have NaN in sum(2)(3)
    // implement here
    let res = x + y
    if (arguments.length < 2){
        return function(z=0){
            return res + z
        }
    } else {
        return res
    }
}
