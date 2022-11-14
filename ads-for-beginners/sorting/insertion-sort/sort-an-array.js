// https://leetcode.com/problems/sort-an-array/
// Get "Time Limit Exceeded" but this part in the NeetCode uses insertion sort.
// If insertion sort is implemented, it is ok for now.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (nums.length <= 1) return nums;

  for (let i = 0; i < nums.length - 1; i++) {
    let j = i + 1;

    while (j >= 0 && nums[j - 1] > nums[j]) {
      const tmp = nums[j - 1];
      nums[j - 1] = nums[j];
      nums[j] = tmp;
      j -= 1;
    }
  }

  return nums;
};

// example 1
(() => {
  const nums = [5, 2, 3, 1];
  const result = sortArray(nums);

  console.log(result);
})();

// example 2
(() => {
  const nums = [5, 1, 1, 2, 0, 0];
  const result = sortArray(nums);

  console.log(result);
})();
