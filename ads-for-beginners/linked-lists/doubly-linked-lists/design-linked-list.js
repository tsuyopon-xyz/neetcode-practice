// https://leetcode.com/problems/design-linked-list/
class DoublyListNode {
  /**
   *
   * @param {number} val
   */
  constructor(val) {
    this.val = val;

    /**
     * @type {DoublyListNode | null}
     */
    this.prev = null;

    /**
     * @type {DoublyListNode | null}
     */
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    /**
     * @type {DoublyListNode | null}
     */
    this.head = null;
    /**
     * @type {DoublyListNode | null}
     */
    this.tail = null;

    /**
     * @type {value}
     */
    this.length = 0;
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    let target = this.head;
    let currentIndex = 0;
    while (target && currentIndex < index) {
      target = target.next;
      currentIndex++;
    }

    return target ? target.val : -1;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {
    const node = new DoublyListNode(val);
    if (!this.head) {
      this.head = node;
    } else {
      const oldHead = this.head;
      this.head = node;
      this.head.next = oldHead;
      oldHead.prev = this.head;
    }

    if (!this.tail) {
      this.tail = node;
    }

    this.length += 1;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  addAtTail(val) {
    const node = new DoublyListNode(val);
    if (!this.tail) {
      this.tail = node;
    } else {
      const oldTail = this.tail;
      this.tail = node;
      oldTail.next = this.tail;
      this.tail.prev = oldTail;
    }

    if (!this.head) {
      this.head = node;
    }

    this.length += 1;
  }

  /**
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index, val) {
    if (this.length < index) return;
    if (index === 0) {
      this.addAtHead(val);
      return;
    }
    if (this.length === index) {
      this.addAtTail(val);
      return;
    }
    let targetNode = this.head;
    let currentIndex = 0;
    while (targetNode && currentIndex < index) {
      targetNode = targetNode.next;
      currentIndex++;
    }

    const prevForNewNode = targetNode ? targetNode.prev : null;
    const nextForNewNode = targetNode;

    // if (val === 18) {
    //   console.log({ targetNode, prevForNewNode, nextForNewNode });
    // }

    const newNode = new DoublyListNode(val);
    newNode.prev = prevForNewNode;
    newNode.next = nextForNewNode;
    if (prevForNewNode) {
      prevForNewNode.next = newNode;
    }
    if (nextForNewNode) {
      nextForNewNode.prev = newNode;
    }

    if (!newNode.next) {
      this.tail = newNode;
    }

    this.length += 1;
  }

  /**
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index) {
    if (this.length <= index) return;

    let target = this.head;
    let currentIndex = 0;
    while (target && currentIndex < index) {
      target = target.next;
      currentIndex++;
    }

    const prevOfTarget = target.prev;
    const nextOfTarget = target.next;
    if (prevOfTarget) {
      prevOfTarget.next = nextOfTarget;
    }
    if (nextOfTarget) {
      nextOfTarget.prev = prevOfTarget;
    }

    target = null;

    if (prevOfTarget && !prevOfTarget.next) {
      this.tail = prevOfTarget;
    }

    if (nextOfTarget && !nextOfTarget.prev) {
      this.head = nextOfTarget;
    }

    this.length -= 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }
}

/**
 *
 * @param {MyLinkedList} list
 */
const print = (list) => {
  let node = list.head;
  while (node) {
    console.log(node.val);
    node = node.next;
  }
};

// [null,null,null,null,2,null,3,-1,null,null,3,null,-1]
const myLinkedList = new MyLinkedList(); // MyLinkedList []
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);
// myLinkedList.get(1); // 2
myLinkedList.deleteAtIndex(1);
// myLinkedList.get(1); // 3
// myLinkedList.get(3); // -1
myLinkedList.deleteAtIndex(3);
myLinkedList.deleteAtIndex(0);
// myLinkedList.get(0);
myLinkedList.deleteAtIndex(0);
myLinkedList.get(0);
console.log(myLinkedList.get(0));
print(myLinkedList);

// const result = mergeTwoLists(createNode([1, 2, 4]), createNode([1, 3, 4]));
// console.log(result);

// const myLinkedList = new MyLinkedList();
// myLinkedList.addAtHead(1);
// myLinkedList.addAtTail(3);
// myLinkedList.addAtIndex(1, 2); // linked list becomes 1->2->3
// // myLinkedList.get(1); // return 2
// // console.log(myLinkedList.get(1));
// myLinkedList.deleteAtIndex(1); // now the linked list is 1->3
// // myLinkedList.get(1); // return 3
// console.log(myLinkedList.get(1));

// console.log(myLinkedList);
