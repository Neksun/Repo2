class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.edges = [];  // Lista de amigos (otros nodos conectados)
  }
}

class City {
  constructor(name) {
    this.name = name;
    this.residents = [];  // Lista de personas que viven en esta ciudad
  }

  addResident(person) {
    this.residents.push(person);
  }
}

class Graph {
  constructor() {
    this.people = {};  // Almacena las personas por nombre
    this.cities = {};  // Almacena las ciudades por nombre
  }

  addPerson(person) {
    this.people[person.name] = person;
    if (this.cities[person.city]) {
      this.cities[person.city].addResident(person);
    }
  }

  addCity(city) {
    this.cities[city.name] = city;
  }

  addEdge(person1, person2) {
    this.people[person1.name].edges.push(person2.name);
    this.people[person2.name].edges.push(person1.name);
  }

  printResidents(cityName) {
    if (this.cities[cityName]) {
      console.log(`People living in ${cityName}:`);
      this.cities[cityName].residents.forEach(resident => {
        console.log(`${resident.name}, Age: ${resident.age}`);
      });
    } else {
      console.log(`City ${cityName} not found.`);
    }
  }
}

// Ejemplo de uso:
let graph = new Graph();

let city1 = new City("New York");
let city2 = new City("Los Angeles");

graph.addCity(city1);
graph.addCity(city2);

let person1 = new Person("Alice", 30, "New York");
let person2 = new Person("Bob", 25, "Los Angeles");
let person3 = new Person("Charlie", 35, "New York");

graph.addPerson(person1);
graph.addPerson(person2);
graph.addPerson(person3);

graph.addEdge(person1, person3);

graph.printResidents("New York");
