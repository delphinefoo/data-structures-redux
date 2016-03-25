var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit), dupe = false;
  var bucket = this._storage.get(i);
  var tuple;
  if (bucket === undefined) {
    bucket = [];
    this._storage.set(i, bucket);
  }
  for (var j = 0; j < bucket.length; j++) {
    tuple = bucket[j];
    if (tuple[0] === k) {
      tuple[1] = v;
      dupe = true;
    }
  }
  if (!dupe) {
    bucket.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit),
      bucket = this._storage.get(i),
      tuple;
  if (bucket !== undefined) {
    for (var j = 0; j < bucket.length; j++) {
      tuple = bucket[j];
      if (tuple && tuple[0] === k) {
        return tuple[1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit),
      bucket = this._storage.get(i),
      tuple;
  if (this.retrieve(k) !== null) {
    for (var j = 0; j < bucket.length; j++) {
      tuple = bucket[j];
      if (tuple[0] === k) {
        bucket[j] = null;
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
