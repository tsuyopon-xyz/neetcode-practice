// https://leetcode.com/problems/implement-stack-using-queues/

class MyStackNode {
  /**
   *
   * @param {number} v
   */
  constructor(v) {
    this.value = v;

    /**
     * @type {MyStackNode | null}
     */
    this.next = null;

    /**
     * @type {MyStackNode | null}
     */
    this.prev = null;
  }
}

class MyStack {
  constructor() {
    /**
     * @type {MyStackNode | null}
     */
    this.head = null;
    /**
     * @type {MyStackNode | null}
     */
    this.tail = null;
    this.length = 0;
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    const node = new MyStackNode(x);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else if (this.length === 1) {
      this.head.next = node;
      node.prev = this.head;
      this.tail = node;
    } else {
      const oldTail = this.tail;
      oldTail.next = node;
      node.prev = oldTail;
      this.tail = node;
    }

    this.length += 1;
  }

  /**
   * @return {number}
   */
  pop() {
    const oldTail = this.tail;
    const newTail = oldTail.prev;
    this.tail = newTail;
    if (newTail) {
      newTail.next = null;
    }

    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return oldTail.value;
  }

  /**
   * @return {number}
   */
  top() {
    return this.tail.value;
  }

  /**
   * @return {boolean}
   */
  empty() {
    return this.length === 0;
  }
}

// example1
// (() => {
//   const obj = new MyStack();
//   obj.push(1);
//   obj.push(2);
//   const param_2 = obj.top();
//   const param_3 = obj.pop();
//   const param_4 = obj.empty();

//   console.log({ param_2, param_3, param_4 });
// })();

// example2
(() => {
  const obj = new MyStack();
  obj.push(1);
  const param_2 = obj.pop();
  const param_3 = obj.empty();

  console.log({ param_2, param_3 });
})();
