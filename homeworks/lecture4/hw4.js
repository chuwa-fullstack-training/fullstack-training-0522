/*
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 */

// use set. transform the 2 input arrays into sets. then do a set intersection operation.
const intersection = (nums1, nums2) => {
  const setA = new Set(nums1);
  const setB = new Set(nums2);
  const intersec = new Set();
  for (const elem of setA) {
    if (setB.has(elem)) {
      intersec.add(elem);
    }
  }
  return [...intersec];
};

nums1 = [1, 2, 2, 1];
nums2 = [2, 2];
console.log(intersection(nums1, nums2)); // [2]

nums3 = [4, 9, 5];
nums4 = [9, 4, 9, 8, 4];
console.log(intersection(nums3, nums4)); // [9, 4]
