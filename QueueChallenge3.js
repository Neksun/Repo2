////Queue Challenge karol paayares 2221343
class People{
    constructor(Name){
        this.Name=Name
        this.queue = [];

    }

    enqueue(element) {
        const currentTime = new Date(); 
        this.queue.push({ name: element, arrivalTime: currentTime }); 
        return this.queue;
      }
    
      dequeue() {
        if (this.queue.length > 0) {
          const Peoplern = this.queue.shift(); 
          console.log("Atendiendo a:", Peoplern.name, "llegó a las:", Peoplern.arrivalTime);
          return Peoplern;
        } else {
          console.log("No hay datos.");
          return null;
        }
      }

}
const queue = new People();

// Agregamos algunas personas a la cola
queue.enqueue("Karol payares");
//queue.enqueue("Victoria payana");
//queue.enqueue("Jona lopez");
//queue.enqueue("Victor miranda");
//queue.enqueue("Bill gates");