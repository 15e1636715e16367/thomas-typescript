import * as winston from "winston";

const simpleLogger = winston.createLogger({
    level: "info",
    format: winston.format.simple(),
    transports: [new winston.transports.Console()],
});

function sayHello(name: string): void {
    simpleLogger.info(`Hello ${name}`)
}

sayHello('Mr Sharp')



import { breadthFirstSearch, depthFirstSearch, SimpleStringGraph } from 'comp-sci-maths-lib/dist'
import { getStringVertex } from "comp-sci-maths-lib/dist/common";

const myGraph = new SimpleStringGraph();
myGraph.addLink('A', 'B')
myGraph.addLink('A', 'D')
myGraph.addLink('B', 'C')
myGraph.addLink('B', 'F')
myGraph.addLink('D', 'C')
myGraph.addLink('D', 'E')
myGraph.addLink('E', 'F')

const bfs: string[] = []
breadthFirstSearch(myGraph, getStringVertex('A'), x => bfs.push(x.value));

simpleLogger.info(bfs)