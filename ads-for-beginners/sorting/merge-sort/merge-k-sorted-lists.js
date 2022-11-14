// https://leetcode.com/problems/merge-k-sorted-lists/

class ListNode {
  /**
   *
   * @param {number} val
   */
  constructor(val) {
    this.val = val ?? 0;
    this.next = null;
  }
}

/**
 *
 * @param {number[]} nums
 * @return {ListNode}
 */
const createLinkedListAndReturnHead = (nums) => {
  return nums
    .map((n) => new ListNode(n))
    .reduce((prevValue, currentValue, currentIndex, array) => {
      prevValue.next = currentValue;

      return currentIndex === array.length - 1 ? array[0] : currentValue;
    });
};

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function (lists) {
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];

  let returnedList;
  let loopLength = lists.length;
  let currentIndex = 1;

  while (currentIndex < loopLength) {
    if (!returnedList) {
      returnedList = mergeTwoLists(lists[0], lists[1]);
    } else {
      returnedList = mergeTwoLists(returnedList, lists[currentIndex]);
    }
    currentIndex++;
  }

  return returnedList;
};

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

const lists = [
  createLinkedListAndReturnHead([1, 4, 5]),
  createLinkedListAndReturnHead([1, 3, 4]),
  createLinkedListAndReturnHead([2, 6]),
];

let resultList = mergeKLists(lists);

while (resultList) {
  console.log(resultList.val);
  resultList = resultList.next;
}

// console.log(result);
