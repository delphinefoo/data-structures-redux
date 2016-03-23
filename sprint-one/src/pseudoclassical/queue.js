var Queue = function() {
  this._storage = {};
  this._size = 0;
};

Queue.prototype.enqueue = function(val) {
  this._storage[this._size] = val;
  this._size++;
};

Queue.prototype.dequeue = function() {
  var removed = this._storage[0];
  delete this._storage[0];
  for (var key in this._storage) {
    this._storage[key - 1] = this._storage[key];
  }
  if(this._size > 0) this._size--;
  return removed;
};

Queue.prototype.size = function() {
  return this._size;
};


