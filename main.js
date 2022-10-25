// This file is for solving problem in LeetCode.
// After submittion a problem, this file is updated to solve new problem.

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  const set = new Set();
  for (const num of nums) {
    set.add(num);
  }

  /**
   * @type {number[][]}
   */
  const lcsList = [];
  const checkedStartNumber = new Set();
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // 1つ前の数字がある場合は、開始位置ではないためスキップする
    if (set.has(num - 1)) continue;

    // 確認済みの開始番号の場合は処理をスキップする
    if (checkedStartNumber.has(num)) continue;
    checkedStartNumber.add(num);

    let candidate = num;
    const currentIndexOfLcsList = lcsList.length;
    while (set.has(candidate)) {
      if (!lcsList[currentIndexOfLcsList]) {
        lcsList.push([]);
      }

      lcsList[currentIndexOfLcsList].push(candidate);
      candidate++;
    }

    max = Math.max(max, lcsList[currentIndexOfLcsList].length);
  }

  return max;
};

const result = longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]);
console.log(result);
