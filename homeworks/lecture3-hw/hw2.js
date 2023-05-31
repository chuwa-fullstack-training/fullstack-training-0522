/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(x = 0, y = 0) {
    // implement here
    var res = x + y;
    if (arguments.length > 1){
        return res
    }else{
        return function(z = 0){
            return res + z
        }
    }
}
