var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance._storage = {};
  someInstance._size = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this._storage[this._size] = val;
  this._size++;
};

queueMethods.dequeue = function() {
  var removed = this._storage[0];
  delete this._storage[0];
  for (var key in this._storage) {
    this._storage[key - 1] = this._storage[key];
  }
  if (this._size > 0) this._size--;
  return removed;
};

queueMethods.size = function() {
  return this._size;
};

