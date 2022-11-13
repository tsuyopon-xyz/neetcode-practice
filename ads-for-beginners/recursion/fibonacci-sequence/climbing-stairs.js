// https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // Solution: https://www.youtube.com/watch?v=Y0lT9Fck7qI
  let [one, two] = [1, 1];

  for (let i = 0; i < n - 1; i++) {
    const temp = one;
    one = one + two;
    two = temp;
  }

  return one;
};

// var climbStairs = function (n) {
//   // console.time('Not-DP');
//   // const result = fibonacci(n);
//   // console.timeEnd('Not-DP');

//   console.time('With-DP');
//   const result = fibonacciInDP(n);
//   console.timeEnd('With-DP');

//   return result;
// };

function fibonacci(n) {
  if (n === 0) return 1;
  if (n <= 0) return 0;

  const result1 = fibonacci(n - 1);
  const result2 = fibonacci(n - 2);

  return result1 + result2;
}

function fibonacciInDP(n, map = new Map()) {
  if (n === 0) return 1;
  if (n <= 0) return 0;

  const key1 = n - 1;
  const key2 = n - 2;
  let result1 = 0;
  let result2 = 0;

  if (map.has(key1)) {
    result1 = map.get(key1);
  } else {
    result1 = fibonacciInDP(key1, map);
    map.set(key1, result1);
  }

  if (map.has(key2)) {
    result2 = map.get(key2);
  } else {
    result2 = fibonacciInDP(key2, map);
    map.set(key2, result2);
  }

  return result1 + result2;
}

console.time('time');
const result = climbStairs(45);
console.timeEnd('time');
console.log(result);
