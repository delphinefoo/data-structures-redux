var Stack = function() {
  this._storage = {};
  this._size = 0;
};

Stack.prototype.push = function(val) {
  this._storage[this._size] = val;
  this._size++;
};

Stack.prototype.pop = function() {
  var removed = this._storage[this._size - 1];
  delete this._storage[this._size - 1];
  if(this._size > 0) this._size--;
  return removed;
};

Stack.prototype.size = function() {
  return this._size;
};
