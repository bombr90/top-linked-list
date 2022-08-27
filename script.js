// script.js
const linkedList = (() => {
  let head = null;
  // List manipulation methods
  const append = (value) => {
    const newNode = node(value);
    if(!head) {
      head = newNode;
    } else {
      tail().nextNode = newNode;
    }
    return tail();
  }

  const prepend = (value) => {
    const newNode = node(value);
    if (!head) {
      head = newNode;
    } else {
      newNode.nextNode = getHead();
      head = newNode;
    }
    return head;
  } 

  const pop = () => {
    if (!head) return false;
    let node = head;
    if (node.nextNode === null) {
      head = null;
      return node;
    }
    while (node.nextNode != null) {
      if (node.nextNode.nextNode === null) {
        const deleteNode = node.nextNode;
        node.nextNode = null;
        return deleteNode;
      }
      node = node.nextNode;
    }
    return false;
  };

  const insertAt = (value, index) => {
    const newNode = node(value);
    let existingNode = head;
    let count = 0;
    while (existingNode != null) {
      if (count === index - 1) {
        newNode.nextNode = existingNode.nextNode;
        existingNode.nextNode = newNode;
        return true;
      }
      existingNode = existingNode.nextNode;
      count++;
    }
    return false;
  };

  const removeAt = (index) => {
    let node = head;
    let count = 0;
    if (index === 0) {
      head = node.nextNode;
      node.nextNode = null;
      return node;
    }
    while (node != null) {
      if (count === index - 1) {
        const deleteNode = node.nextNode;
        node.nextNode = node.nextNode.nextNode;
        deleteNode.nextNode = null;
        return deleteNode;
      }
      node = node.nextNode;
      count++;
    }
    return false;
  }

  // List querying methods
  const size = () =>  {
    let count = 0;
    let node = head;
    while(node) {
      count++;
      node = node.nextNode;
    }
    return count;
  }
  
  const getHead = () =>  head
  
  const tail = () =>  {
    let existingNode = head;
    while (existingNode.nextNode) {
      existingNode = existingNode.nextNode;
    }
    return existingNode;
  }

  const at = (index) => {
    let node = head;
    let count = 0;
    while(node != null){
      if(count === index) {
        return node.value;
      }
      node = node.nextNode;
      count++;
    }
    return false;
  } 
  
  const contains = (value) => {
    let node = head
    while (node != null) {
      if(node.value == value) {
        return true
      }
      node = node.nextNode;
    }
    return false;
  }

  const find = (value) => {
    let index = 0;
    let node = head;
    while(node != null)  {
      if(node.value == value) {
        return index;
      }
      node = node.nextNode;
      index++;
    }
    return false;
  }

  const toString = () =>  {
    let node = head;
    let string = new String();
    while(node !== null) {
      string += (`( ${node.value} ) -> `)
      node = node.nextNode;
    }
    string += (node)
    return string;
  }

  return {
    append,
    prepend,
    pop,
    at,
    find,
    insertAt,
    removeAt,
    getHead,
    contains,
    toString,
    size,
    getHead,
    tail,
  };
})();

const node = (value = null, nextNode = null) => {
  return {
    value, 
    nextNode,
  }
}

// Example code
console.log("append('abc')",linkedList.append('abc'));
console.log("append('123')",linkedList.append("123"));
console.log("append(456)",linkedList.append(456));
console.log("append(123234)",linkedList.append(123234));
console.log("append('aflk')",linkedList.append("aflk"));
console.log("append('45232')",linkedList.append('45232'));
console.log('tostring())',linkedList.toString());
console.log("size()", linkedList.size());
console.log("prepend(dsf32323)", linkedList.prepend("dsf32323"));
console.log("getHead()", linkedList.getHead());
console.log("pop()", linkedList.pop());
console.log("tail", linkedList.tail());
console.log("removeat(3)", linkedList.removeAt(3));
console.log("tostring()", linkedList.toString());
console.log("contains('aflk')", linkedList.contains('aflk'));
console.log("find(aflk)", linkedList.find('aflk'));
console.log('at(4)',linkedList.at(4));
console.log("insertAt(abcdefg,4)", linkedList.insertAt("abcdefg", 4));
console.log('tostring:',linkedList.toString());


