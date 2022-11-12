// https://leetcode.com/problems/fibonacci-number/

const PREFIX_KEY = 'fib:';

/**
 *
 * @param {number} n
 */
const createKey = (n) => {
  return PREFIX_KEY + n;
};

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n, map = new Map()) {
  if (n <= 1) return n;

  const key = createKey(n);
  if (map.has(key)) {
    return map.get(key);
  }

  const value = fib(n - 1, map) + fib(n - 2, map);
  map.set(key, value);

  return value;
};

console.time('fib');
const result = fib(30);
console.timeEnd('fib');
console.log(result);
