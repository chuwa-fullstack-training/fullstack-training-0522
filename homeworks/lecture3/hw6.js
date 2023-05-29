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
  // implement here
  const numMap = new Map();
  for (let i in nums) {
    numMap.has(nums[i])
      ? numMap.get(nums[i]).push(i)
      : numMap.set(nums[i], [i]);
  }
  let sum = 0;
  for (let [key, value] of numMap) {
    // console.log(key, value);
    sum += ((value.length - 1) * (value.length)) / 2;
  }
  return sum;
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
console.log(numIdenticalPairs([1, 1, 1, 1]));
console.log(numIdenticalPairs([1, 2, 3]));
console.log(numIdenticalPairs([]));

/**
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 */
function removeVowels(s) {
  // implement here
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i].toLowerCase())) {
      s = s.substr(0, i) + s.substr(i + 1, s.length - i);
      i--;
    }
  }
  return s;
}

console.log(removeVowels(" "));
console.log(removeVowels("string"));
console.log(removeVowels("FETCH"));
console.log(removeVowels("AeisOu"));
