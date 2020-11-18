import BinaryTree from 'comp-sci-maths-lib/dist/dataStructures/binaryTree/BinaryTree';
import traverseInOrder from 'comp-sci-maths-lib/dist/algorithms/binaryTreeTraversal/traverseInOrder'
import traversePreOrder from 'comp-sci-maths-lib/dist/algorithms/binaryTreeTraversal/traversePreOrder'
import traversePostOrder from 'comp-sci-maths-lib/dist/algorithms/binaryTreeTraversal/traversePostOrder'



test('Traversals', () => {
    const myTree = new BinaryTree<number>((a, b) => a - b);
    [6, 3, 8, 5, 1, 2].forEach(x => myTree.add(x))


    const inOrderResults: number[] = [];
    traverseInOrder(myTree, x => inOrderResults.push(x))
    expect(inOrderResults).toEqual([1, 2, 3, 5, 6, 8])

    const preOrderResults: number[] = [];
    traversePreOrder(myTree, x => preOrderResults.push(x))
    expect(preOrderResults).toEqual([6, 3, 1, 2, 5, 8])






})