/**
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

  push(x) -- Push element x onto stack.
  pop() -- Removes the element on top of the stack.
  top() -- Get the top element.
  getMin() -- Retrieve the minimum element in the stack.
 */

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this._stack = []
  this._minStack = [Infinity]
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this._stack.push(x);
  this._minStack.push(Math.min(this._minStack[this._minStack.length - 1], x));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this._stack.pop()
  this._minStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this._stack[this._stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this._minStack[this._minStack.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
