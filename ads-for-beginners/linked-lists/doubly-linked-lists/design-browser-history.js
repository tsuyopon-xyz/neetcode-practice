class BrowserHistory {
  /**
   *
   * @param {string} homepage
   */
  constructor(homepage) {
    /**
     * @type {string[]}
     */
    this.history = [homepage];

    /**
     * @type {number}
     */
    this.currentIndex = 0;
  }

  /**
   * @param {string} url
   * @return {void}
   */
  visit(url) {
    const newIndex = this.currentIndex + 1;
    this.history[newIndex] = url;
    this.currentIndex = newIndex;

    for (let _ = this.history.length - 1; _ > newIndex; _--) {
      this.history.pop();
    }
  }

  /**
   * @param {number} steps
   * @return {string}
   */
  back(steps) {
    if (this.currentIndex - steps < 0) {
      this.currentIndex = 0;
    } else {
      this.currentIndex -= steps;
    }

    return this.history[this.currentIndex];
  }

  /**
   * @param {number} steps
   * @return {string}
   */
  forward(steps) {
    if (this.currentIndex + steps >= this.history.length) {
      this.currentIndex = this.history.length - 1;
    } else {
      this.currentIndex += steps;
    }

    return this.history[this.currentIndex];
  }
}
