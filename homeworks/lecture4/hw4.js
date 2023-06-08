/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 *
 * Example 1:
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2]
 *
 * Example 2:
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [9,4]
 *
 */
const intersection = (nums1, nums2) => {
    nums1.sort();
    nums2.sort();
    let intersect = [];
    for (let i = 0, j = 0; i < nums1.length && j < nums2.length; nums1[i] < nums2[j] ? ++i : ++j) {
      if (nums1[i] == nums2[j] && nums1[i] !== intersect[intersect.length - 1]) {
        intersect.push(nums1[i]);
      }
    }
    return intersect;
};
