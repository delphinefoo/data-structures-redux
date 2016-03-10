var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  // Implement the methods below
  someInstance.push = function(value){
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function(){
    var removed = storage[counter-1];
    delete storage[counter-1];
    if (counter > 0) counter--;
    return removed;
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};
