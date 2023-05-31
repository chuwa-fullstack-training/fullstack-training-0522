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
  let goodPairs = 0;
  const numCounter = {};
  for (let num of nums) {
    if (!(num in numCounter)) {
      numCounter[num] = 1;
    } else {
      numCounter[num] += 1;
    }
  }
  console.log(numCounter);
  for (let key in numCounter) {
    if (numCounter[key] > 1) {
      goodPairs += (numCounter[key] * (numCounter[key] - 1)) / 2;
    }
  }
  return goodPairs;
}

/**
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 */
function removeVowels(s) {
  const vowels = ["a", "e", "i", "o", "u"];
  let newString = "";
  for (let i = 0; i < s.length; i++) {
    if (!vowels.includes(s[i].toLowerCase())) {
      newString += s[i];
    }
  }
  return newString;
}
// test case
const s1 = "hello, world!";
console.log(removeVowels(s1)); // "hll, wrld!"
