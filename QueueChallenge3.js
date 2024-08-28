////Queue Challenge karol paayares 2221343
class People{
    constructor(name){
        this.name=name
        this.queue = [];

    }

   enqueue(name) {
    const arrivalTime = new Date();
    this.queue.push({ name, arrivalTime }); 
    return this.queue;
}

dequeue() {
    if (this.queue.length > 0) {
        const person = this.queue.shift();
        console.log("Atendiendo a:", person.name, "llegó a las:", person.arrivalTime);
        return person;
    } else {
        console.log("No hay datos.");
        return null;
    }
}

printQueue() {
    if (this.queue.length > 0) {
        console.log("Cola de personas:");
        this.queue.forEach(person => {
            console.log("Nombre:", person.name, " - Llegó a las:", person.arrivalTime);
        });
    } else {
        console.log("La cola está vacía.");
    }
}
}

const queue = new People();

queue.enqueue("Karol Payares");
queue.enqueue("Victoria Payana");
queue.enqueue("Jona Lopez");
queue.enqueue("Victor Miranda");
queue.enqueue("Bill Gates");

// Imprimir la cola actual
queue.printQueue();

// Atender a las personas en el orden que llegaron
queue.dequeue();
queue.dequeue();

// Imprimir la cola después de atender a dos personas
queue.printQueue();
