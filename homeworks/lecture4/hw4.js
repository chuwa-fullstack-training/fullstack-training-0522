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
  // Your solution here
   const set1 = new Set();
   const set2 = new Set();
   const ans = [];
   for(let i of nums1) set1.add(i);
   for(let i of nums2) set2.add(i);
   for(let i of set1){
      if(set2.has(i)) ans.push(i);
   }
   return ans;
};



let nums1 = [1,2,2,1], nums2 = [2,2]
console.log(intersection(nums1,nums2));

let nums11 = [4,9,5], nums22 = [9,4,9,8,4]
console.log(intersection(nums11,nums22));