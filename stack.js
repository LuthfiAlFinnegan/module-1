class Stack {
  #maxSize;
  #container = [];

  constructor(maxsize = 10) {
    this.#maxSize = maxsize;
  }

  #isFull() {
    return this.#container.length >= this.#maxSize;
  }

  #isEmpty() {
    return this.#container.length === 0;
  }

  push(element) {
    if (this.#isFull()) {
      console.log(`Stack Overflow!`);
      return;
    }

    this.#container.push(element);
  }

  pop() {
    if (this.#isEmpty()) {
      console.log(`Stack Underflow!`);
      return;
    }
    this.#container.pop();
  }

  getElements() {
    return this.#container;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.getElements());

stack.pop();
console.log(stack.getElements());
