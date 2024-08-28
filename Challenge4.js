class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
}

class City {
  constructor(name) {
    this.name = name;
  }
}

class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(node) {
    this.nodes[node.name] = node;
  }

  addEdge(node1, node2) {
    this.nodes[node1.name].edges.push(node2.name);
    this.nodes[node2.name].edges.push(node1.name);
  }

  getPeopleInCity(city) {
    const people = [];
    for (const node in this.nodes) {
      if (this.nodes[node] instanceof Person && this.nodes[node].city === city) {
        people.push(this.nodes[node]);
      }
    }
    return people;
  }
}


const graph = new Graph();


const alice = new Person('Alice', 30, 'New York');
const bob = new Person('Bob', 25, 'Los Angeles');
const charlie = new Person('Charlie', 35, 'New York');
const newYork = new City('New York');
const losAngeles = new City('Los Angeles');

graph.addNode(alice);
graph.addNode(bob);
graph.addNode(charlie);
graph.addNode(newYork);
graph.addNode(losAngeles);


graph.addEdge(alice, newYork);
graph.addEdge(bob, losAngeles);
graph.addEdge(charlie, newYork);

const peopleInNewYork = graph.getPeopleInCity('New York');
console.log(peopleInNewYork);