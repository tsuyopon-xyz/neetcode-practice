class ListNode {
  /**
   *
   * @param {string} homepage
   */
  constructor(homepage) {
    this.value = homepage;

    /**
     * @type {ListNode | null}
     */
    this.prev = null;

    /**
     * @type {ListNode | null}
     */
    this.next = null;
  }
}

class BrowserHistory {
  /**
   *
   * @param {string} homepage
   */
  constructor(homepage) {
    /**
     * @type {ListNode}
     */
    this.currentNode = new ListNode(homepage);
  }

  /**
   * @param {string} url
   * @return {void}
   */
  visit(url) {
    const newNode = new ListNode(url);
    this.currentNode.next = newNode;
    newNode.prev = this.currentNode;
    this.currentNode = newNode;
  }

  /**
   * @param {number} steps
   * @return {string}
   */
  back(steps) {
    let target = this.currentNode;
    let currentIndex = 0;
    while (target.prev && currentIndex < steps) {
      target = target.prev;
      currentIndex++;
    }

    this.currentNode = target;

    return this.currentNode.value;
  }

  /**
   * @param {number} steps
   * @return {string}
   */
  forward(steps) {
    let target = this.currentNode;
    let currentIndex = 0;
    while (target.next && currentIndex < steps) {
      target = target.next;
      currentIndex++;
    }

    this.currentNode = target;

    return this.currentNode.value;
  }
}

// class BrowserHistory {
//   /**
//    *
//    * @param {string} homepage
//    */
//   constructor(homepage) {
//     /**
//      * @type {string[]}
//      */
//     this.history = [homepage];

//     /**
//      * @type {number}
//      */
//     this.currentIndex = 0;
//   }

//   /**
//    * @param {string} url
//    * @return {void}
//    */
//   visit(url) {
//     const newIndex = this.currentIndex + 1;
//     this.history[newIndex] = url;
//     this.currentIndex = newIndex;

//     for (let _ = this.history.length - 1; _ > newIndex; _--) {
//       this.history.pop();
//     }
//   }

//   /**
//    * @param {number} steps
//    * @return {string}
//    */
//   back(steps) {
//     if (this.currentIndex - steps < 0) {
//       this.currentIndex = 0;
//     } else {
//       this.currentIndex -= steps;
//     }

//     return this.history[this.currentIndex];
//   }

//   /**
//    * @param {number} steps
//    * @return {string}
//    */
//   forward(steps) {
//     if (this.currentIndex + steps >= this.history.length) {
//       this.currentIndex = this.history.length - 1;
//     } else {
//       this.currentIndex += steps;
//     }

//     return this.history[this.currentIndex];
//   }
// }
