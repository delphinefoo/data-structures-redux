var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = new Node(value);
    if(!list.head) {
      list.head = newNode;
    }
    if(list.tail) {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function(){
    var removed = list.head;
    if(list.head) {
      list.head = list.head.next;
    }
    if (list.head === list.tail) {
      list.tail = null;
    }
    return removed.value;
  };

  list.contains = function(target){
    var subroutine = function(node) {
      if(node.value === target) return true;
      if(node.next === null) return false;
      return subroutine(node.next);
    }
    return subroutine(list.head);
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
