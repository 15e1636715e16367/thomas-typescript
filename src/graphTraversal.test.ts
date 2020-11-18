import { getStringVertex } from 'comp-sci-maths-lib/dist/common';
import Graph from 'comp-sci-maths-lib/dist/dataStructures/graph/Graph'
import { StringGraphVertex } from 'comp-sci-maths-lib/dist/types'

test('Simple Graph', () => {
    const myGraph: Graph<StringGraphVertex> = new Graph();

    const vertexA = getStringVertex('A');
    const vertexB = getStringVertex('B');
    const vertexC = getStringVertex('C');
    const vertexD = getStringVertex('D');
    const vertexE = getStringVertex('E');
    const vertexF = getStringVertex('F');
    const vertexH = getStringVertex('H');

    myGraph.addBiDirectionalEdge(vertexA, vertexB);
    myGraph.addBiDirectionalEdge(vertexA, vertexC);
    myGraph.addBiDirectionalEdge(vertexC, vertexD);
    myGraph.addBiDirectionalEdge(vertexB, vertexD);
    myGraph.addBiDirectionalEdge(vertexB, vertexE);
    myGraph.addBiDirectionalEdge(vertexE, vertexF);
    myGraph.addBiDirectionalEdge(vertexD, vertexF);
    myGraph.addBiDirectionalEdge(vertexF, vertexH);

    const outFromA = myGraph.getOutgoing(vertexA);
    const outFromAValues = outFromA.map(x => x.to).map(o => o.value);
    expect(outFromAValues.includes('B')).toBeTruthy()
    expect(outFromAValues.includes('C')).toBeTruthy()
    expect(outFromAValues.includes('D')).toBeFalsy()

    const outFromB = myGraph.getOutgoing(vertexB);
    const outFromBValues = outFromB.map(x => x.to).map(o => o.value);
    expect(outFromBValues.includes('E')).toBeTruthy()
    expect(outFromBValues.includes('D')).toBeTruthy()
    expect(outFromBValues.includes('F')).toBeFalsy()
    expect(outFromBValues.includes('H')).toBeFalsy()

    const outFromF = myGraph.getOutgoing(vertexF);
    const outFromFValues = outFromF.map(x => x.to).map(o => o.value);
    expect(outFromFValues.includes('H')).toBeTruthy()

})