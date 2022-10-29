/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1 && !list2) return undefined;
  if (!list1) return list2;
  if (!list2) return list1;

  // 1. list1, list2の値を比較
  // 2. 比較して小さい方を選択する
  const selectedList = list1.val < list2.val ? list1 : list2;
  // 3. 選択した方はnextに移動する
  if (selectedList === list1) {
    selectedList.next = mergeTwoLists(list1.next, list2);
  } else {
    selectedList.next = mergeTwoLists(list1, list2.next);
  }
  // 4. 1~3をそれぞれのnextがなくなるまで繰り返す

  return selectedList;
};

/**
 *
 * @param {number[]} numbers
 * @return {ListNode}
 */
function createList(numbers) {
  const lists = numbers.map((n) => {
    return new ListNode(n);
  });

  for (let i = 0; i < lists.length - 1; i++) {
    const current = lists[i];
    const next = lists[i + 1];
    current.next = next;
  }

  return lists[0];
}

const result = mergeTwoLists(createList([1, 2, 4]), createList([1, 3, 4]));
let _list = result;
while (_list) {
  console.log(_list);
  _list = _list.next;
}
// console.log(result);
