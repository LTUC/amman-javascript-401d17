'use strict';

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    // Pre-order: root >> left >> right
    preOrder() {
        let arr = [];
        const traversal = node => {
            arr.push(node.value);
            if(node.left) traversal(node.left)
            if(node.right) traversal(node.right)
        }

        traversal(this.root);
        return arr;
    }

    // Post-order: left >> right >> root
    postOrder() {
        let arr = [];
        const traversal = node => {
            if(node.left) traversal(node.left)
            if(node.right) traversal(node.right)
            arr.push(node.value);
        }

        traversal(this.root);
        return arr;
    }

    // In-order: left >> root >> right
    inOrder() {
        let arr = [];
        const traversal = node => {
            if(node.left) traversal(node.left)
            arr.push(node.value);
            if(node.right) traversal(node.right)
        }

        traversal(this.root);
        return arr;
    }
}

module.exports = BinaryTree;