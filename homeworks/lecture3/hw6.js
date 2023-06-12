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
  let count = nums.reduce((acc, cur, index) => {
    for (let i = index + 1; i < nums.length; i++) {
      if (cur === nums[i]) acc++;
    }
    return acc;
  }, 0);

  return count;

}

// test
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); // Output: 4

/**
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 */
function removeVowels(s) {
  // implement here

  /* This is a regular expression pattern enclosed in forward slashes (/). The pattern [aeiou] represents a character class that matches any single character that is one of the lowercase vowels 'a', 'e', 'i', 'o', or 'u'. The i flag makes the matching case-insensitive, so it matches both lowercase and uppercase vowels. The g flag ensures that all occurrences of the pattern in the string are replaced, not just the first one. */
  return s.replace(/[aeiou]/gi, '');
}

// test
console.log(removeVowels('leetcodeisacommunityforcoders')); // Output: 'ltcdscmmntyfrcdrs'