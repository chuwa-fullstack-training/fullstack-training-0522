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
function numIdenticalPairs(nums) {
  
  let map={};
  for(let val of nums){
    if(val in map){
      map[val] = map[val]+1;
    }else{
      map[val] = 1;
    }
  }
  let result=0;
  for(let key in map){
    let value = map[key]
    if(value>1){
      result+= value*(value-1)/2;
    }
  }
  return result;
}

console.log(numIdenticalPairs([1,2,3,1,1,3]))
console.log(numIdenticalPairs([1,1,1,1]))
console.log(numIdenticalPairs([1,2,3]))

/**
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 */
function removeVowels(s) {

  let vowels = ['a','e','i','o','u'];
  let result='';
  for(let i=0;i<s.length;i++){
    // console.log(s[i])
    if(!vowels.includes(s[i])){
      result+=s[i];
    }
  }
  return result;
}

console.log(removeVowels('abcdefg'))
console.log(removeVowels('aeiouc'))
console.log(removeVowels('kljio'))