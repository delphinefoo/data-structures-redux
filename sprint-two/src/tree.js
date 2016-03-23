var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};



var treeMethods = {};

treeMethods.addChild = function(value){
  var child = new Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target){
  var found = false;
  var sub = function(node) {
    if(node.value === target) {
      found = true;
      return;
    }
    for(var i = 0; i < node.children.length; i++) {
      sub(node.children[i]);
    }
  }
  sub(this);
  return found;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
