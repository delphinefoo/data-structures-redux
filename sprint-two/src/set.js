var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage = this._storage || {};
  this._storage[item] = item;
};

setPrototype.contains = function(item){
  return this._storage[item] !== undefined;
};

setPrototype.remove = function(item){
  var removed = this._storage[item];
  delete this._storage[item];
  return removed;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
