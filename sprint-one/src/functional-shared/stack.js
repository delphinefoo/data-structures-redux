var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack._storage = {};
  newStack._size = 0;
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this._storage[this._size] = value;
  this._size++;
};

stackMethods.pop = function() {
  var removed = this._storage[this._size - 1];
  delete this._storage[this._size - 1];
  if (this._size > 0) this._size--;
  return removed;
};

stackMethods.size = function() {
  return this._size;
};




