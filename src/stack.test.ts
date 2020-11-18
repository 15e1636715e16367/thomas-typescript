import Stack from 'comp-sci-maths-lib/dist/dataStructures/stack/Stack';
import Queue from 'comp-sci-maths-lib/dist/dataStructures/queue/Queue';


test('Stack', () => {
    const myStack: Stack<number> = new Stack<number>();

    myStack.push(7)
    myStack.push(9)

    const pop1 = myStack.pop();

    expect(pop1).toBe(9);

})

test('Queue', () => {
    const myQueue: Queue<number> = new Queue<number>();

    myQueue.enqueue(4)
    myQueue.enqueue(5)

    const dequeue1 = myQueue.dequeue();

    expect(dequeue1).toBe(4);
})