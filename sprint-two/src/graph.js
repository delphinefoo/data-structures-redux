

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this._nodes = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this._nodes[node] = { edges: [] };
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  if(this._nodes[node]) {
    return true;
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  var removed = this._nodes[node];
  for (var key in this._nodes) {
    if(this.hasEdge(this._nodes[key], node)) {
      this.removeEdge(this.nodes[key], node);
    }
  }
  delete this._nodes[node];
  return removed;
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  if(this._nodes[fromNode] && this._nodes[toNode]) {
    for(var i = 0; i < this._nodes[fromNode].edges.length; i++) {
      if (this._nodes[fromNode].edges[i] === toNode) {
        return true;
      }
    }
    return false;
  }
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  if(this._nodes[fromNode] && this._nodes[toNode]) {
    this._nodes[fromNode].edges.push(toNode);
    this._nodes[toNode].edges.push(fromNode);
  }
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  if(this._nodes[fromNode] && this._nodes[toNode] && this.hasEdge(fromNode, toNode)) {
    this._nodes[fromNode].edges.splice(this._nodes[fromNode].edges.indexOf(toNode), 1);
    this._nodes[toNode].edges.splice(this._nodes[toNode].edges.indexOf(fromNode), 1);
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for (var node in this._nodes) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



