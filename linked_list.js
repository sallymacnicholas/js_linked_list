function createList() {
  return { head: null };
}

function append(list, data) {
  if (list.head === null) {
    list.head = new node(data);
  }
  else {
    findTail(list).nextNode = new node(data);
  }
}

function node(data) {
  this.data = data;
  this.nextNode = null;
}

function prepend(list, data) {
  if (list.head === null) {
    list.head = new node(data);
  }
  else {
    
  }
}

function findTail(list) {
  var node = list.head
  while(node.nextNode !== null) {
    node = node.nextNode;
  }
  return node;
}

function tailValue(list) {
  return findTail(list).data
}

function headValue(list) {
  return list.head.data
}

function count(list) {
  var count = 0;
  if (list.head !== null) {
    var node = list.head
    var count = 1
    while(node.nextNode !== null) {
      count ++
      node = node.nextNode
    }
  }
  return count;
};

function pop(list) {
  if (list.head.nextNode === null) {
    list.head = null;
  }
  else {
    var node = list.head;
    while(node.nextNode.nextNode !== null) {
      node = node.nextNode;
    }
    node.nextNode = null;
  }
}

function include(list, string) {
  var node = list.head;
  if (list.head.data === string) {
    return true;
  }
  else {
    while(node.nextNode !== null) {
      if (node.data.includes(string) === true) {
        return true;
      }
      else {
        node = node.nextNode
        return false;
      }
    }
  }
}
