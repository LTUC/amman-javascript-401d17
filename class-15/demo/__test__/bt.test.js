'use strict';

const Node = require('../binary-tree/Node');
const BT = require('../binary-tree/BinaryTree');

let tree = null;

describe('Binary Tree testig', () => {
    beforeAll(() => {

        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        let seven = new Node(7);
        let eight = new Node(8);
        let nine = new Node(9);

        // console.log(one)
        one.left = two;
        one.right = three;
        two.left = six;
        three.left = four;
        three.right = five;
        six.right = seven;
        seven.left = eight;
        seven.right = nine;


        tree = new BT(one);
    });

    it('costructor', () => {
        const newTree = new BT();
        expect(newTree.root).toBeNull();
        expect(tree.root.value).toEqual(1)
    });

    it('preOrder testing', () => {
        const expectedResult = [1, 2, 6, 7, 8, 9, 3, 4, 5];
        expect(tree.preOrder()).toEqual(expectedResult)
    })
})