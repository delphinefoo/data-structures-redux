var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance._storage = {};
  someInstance._size = 0;
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(val) {
  this._storage[this._size] = val;
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

