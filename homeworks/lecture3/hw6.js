/**
 * Given an array of integers nums, return the number of good pairs.
 * A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 *
 * Example 1:
 * Input: nums = [1,2,3,1,1,3]  Output: 4
 * Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5)
 *
 * Example 2:
 * Input: nums = [1,1,1,1]  Output: 6
 * Explanation: Each pair in the array are good.
 *
 * Example 3:
 * Input: nums = [1,2,3]    Output: 0
 *
 * Constraints:
 * 1 <= nums.length <= 100
 * 1 <= nums[i] <= 100
 */
<<<<<<< HEAD
function numIdenticalPairs(nums) {//brute force
  // implement here
  let result = [];
  for (let i = 0; i < nums.length -1; i++){
    for (let j = i + 1; j < nums.length; j++){
      if (nums[i] === nums[j])
        result.push([i, j]);
    }
  }
  //console.log(result);
  return result.length;
}
// nums = [1,2,3,1,1,3];
// nums = [1,1,1,1];
nums = [1,2,3];

console.log(numIdenticalPairs(nums));
=======
function numIdenticalPairs(nums) {
  // implement here
}
>>>>>>> main

/**
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 */
function removeVowels(s) {
  // implement here
<<<<<<< HEAD
  if (!s)
    return '';
  let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  let result = s;
  for (let char in s){
    if (vowels.includes(s[char])){
      result = result.replace(s[char], '');
    }
  }
  return result;
}
console.log(removeVowels(""));//''
console.log(removeVowels("abcdefgioU"));//bcdfg
=======
}
>>>>>>> main
