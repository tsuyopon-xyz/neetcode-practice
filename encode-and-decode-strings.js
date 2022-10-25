// This problem in LeetCode is not available for non paid users.
// You can check description in LintCode
//  https://www.lintcode.com/problem/659/

/**
 *
 * @param {string[]} strs
 * @returns
 */
const solution = (strs) => {
  let encodedString = '';
  strs.forEach((str) => {
    encodedString += encode(str);
  });

  return encodedString;
};

const DELIMITER = '#';

/**
 *
 * @param {string} str
 * @return {string}
 */
const encode = (str) => {
  const length = str.length;
  return `${length}${DELIMITER}${str}`;
};

/**
 *
 * @param {string} str
 * @return {string[]}
 */
const decode = (str) => {
  let i = 0;
  const strs = [];
  console.log(str.substring(0, 4));
  while (i < str.length) {
    const char = str[i];
    if (char !== DELIMITER) {
      i++;
      continue;
    }

    const strLength = Number(str[i - 1]);
    const _str = str.substring(i + 1, i + 1 + strLength);
    strs.push(_str);
    i += strLength + 1;
  }

  return strs;
};

const encodedString = solution(['we', 'say', ':', 'yes']);
const decodedStrings = decode(encodedString);

console.log({ encodedString, decodedStrings });
