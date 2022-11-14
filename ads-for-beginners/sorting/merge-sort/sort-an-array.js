// https://leetcode.com/problems/sort-an-array/
// with the merge sort

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  return mergeSort(nums, 0, nums.length - 1);
};

/**
 *
 * @param {number[]} nums
 * @param {number} l start index
 * @param {number} r end index
 */
const mergeSort = (nums, l, r) => {
  if (r - l + 1 <= 1) return nums;

  const m = Math.floor((l + r) / 2);
  mergeSort(nums, l, m); // left part
  mergeSort(nums, m + 1, r); // right part
  merge(nums, l, m, r);

  return nums;
};

/**
 *
 * @param {number[]} nums
 * @param {number} l
 * @param {number} m
 * @param {number} r
 */
const merge = (nums, l, m, r) => {
  let leftIndex = l;
  let rightIndex = m + 1;
  const newArray = [];

  while (leftIndex <= m || rightIndex <= r) {
    const left = leftIndex <= m ? nums[leftIndex] : Number.POSITIVE_INFINITY;
    const right = rightIndex <= r ? nums[rightIndex] : Number.POSITIVE_INFINITY;
    if (left <= right) {
      newArray.push(left);
      leftIndex++;
    } else {
      newArray.push(right);
      rightIndex++;
    }
  }

  for (let i = 0; i < newArray.length; i++) {
    nums[l + i] = newArray[i];
  }
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
