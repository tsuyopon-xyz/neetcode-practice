// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/

class NumberNode {
  /**
   *
   * @param {number} value
   */
  constructor(value) {
    this.value = value;

    /**
     * @type {NumberNode}
     */
    this.next = null;
  }
}

class NumberList {
  /**
   *
   * @param {number[]} numbers
   */
  constructor(numbers) {
    /**
     * @type {NumberNode | null}
     */
    this.head = null;

    /**
     * @type {NumberNode | null}
     */
    this.tail = null;

    /**
     * @type {number}
     */
    this.length = 0;

    numbers.forEach((n) => {
      const node = new NumberNode(n);
      this.enqueue(node);
    });
  }

  /**
   *
   * @param {NumberNode} node
   */
  enqueue(node) {
    this.length += 1;

    if (!this.head) {
      this.head = node;
      return;
    }

    if (!this.tail) {
      this.tail = node;
      this.head.next = node;
      return;
    }

    const oldTail = this.tail;
    oldTail.next = node;
    this.tail = node;
  }

  /**
   *
   * @returns {NumberNode | null}
   */
  dequeue() {
    if (this.length === 0) return null;

    const oldHead = this.head;
    const newHead = this.head.next;
    this.head = newHead;

    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return oldHead;
  }
}

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  const studentList = new NumberList(students);
  const sandwichList = new NumberList(sandwiches);

  let initialStudentNode = studentList.head;
  let sandwichNode = sandwichList.head;
  let isRotated = false;

  // isRotated : 1周しても人数が変わらない場合はそれ以上変化がないことを意味するためループを終了する
  while (!isRotated && sandwichNode) {
    const studentNode = studentList.dequeue();
    if (studentNode.value === sandwichNode.value) {
      sandwichList.dequeue();

      initialStudentNode = studentList.head;
      sandwichNode = sandwichList.head;
    } else {
      studentList.enqueue(studentNode);
      isRotated = initialStudentNode === studentList.head;
    }
  }

  return studentList.length;
};

// example1
(() => {
  const students = [1, 1, 0, 0];
  const sandwiches = [0, 1, 0, 1];
  const result = countStudents(students, sandwiches);

  console.log({ result });
})();

// example2
(() => {
  const students = [1, 1, 1, 0, 0, 1];
  const sandwiches = [1, 0, 0, 0, 1, 1];
  const result = countStudents(students, sandwiches);

  console.log({ result });
})();
