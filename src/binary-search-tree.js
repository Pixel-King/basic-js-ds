const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.roots = null;
  }
  root() {
    return this.roots;
  }

  add( data ) {
    this.roots = addWithin(this.roots, data);
    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
  }

  has( data ) {
    return searchIN(this.roots, data);

    function searchIN(node, data){
      if(!node){
        return false;
      }
      if (node.data === data){
        return true;
      }
      return data < node.data ?
        searchIN(node.left, data):
        searchIN(node.right, data)
    }
  }

  find(data) {
    return searchIN(this.roots, data);

    function searchIN(node, data){
      if(!node){
        return null;
      }
      if (node.data === data){
        return node;
      }
      return data < node.data ?
        searchIN(node.left, data):
        searchIN(node.right, data)
    }
  }

  remove(data) {
    this.roots = removeN(this.roots, data)
    function  removeN(node, data){
      if(!node){
        return null;
      }
      if (data< node.data){
        node.left = removeN(node.left, data);
        return node;
      } else if (node.data < data){
        node.right = removeN(node.right, data);
        return node;
      }else{

        if(!node.left && !node.right){
          return null;
        }

        if (!node.right){
          node = node.left;
          return node;
        }
        if(!node.left){
           node = node.right;
           return node;
        }
        let minFromRight = node.right;
        while(minFromRight.left){
          minFromRight = minFromRight.left;
        }

        node.data = minFromRight.data;

        node.right = removeN(node.right, minFromRight.data);

        return node;
      }

    }
  }

  min() {
    if(!this.roots){
      return null;
    }
    let min = this.roots;
    while(min.left){
      min = min.left;
    }
    return min.data;
  }

  max() {
    if(!this.roots){
      return null;
    }
    let max = this.roots;
    while(max.right){
      max= max.right;
    }
    return max.data;
  }
}

module.exports = {
  BinarySearchTree
};