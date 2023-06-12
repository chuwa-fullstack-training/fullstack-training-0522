/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(...nums) {
    // implement here
    if (nums.length === 2) {
        return nums[0] + nums[1];
    }

    // if there is only one number, return a function that takes another number
    if (nums.length === 1) {
        return (num) => nums[0] + num;
    }

    // if there is no number, return 0
    return 0;
}

// test
console.log(sum(2)(10))
console.log(sum(2, 3))