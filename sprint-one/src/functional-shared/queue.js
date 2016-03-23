var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue._storage = {};
  newQueue._size = 0;
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this._storage[this._size] = value;
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

