//Karol payares 2221343
class TODO{
    constructor(title, description, next=null){
        this.title= title;
        this.description= description;
        this.next=next;

    }
}
const TODO1 = new TODO ("food for the cat", "tomorrow buy 1kg of food",)
const TODO2 = new TODO ("food for the cat", "tomorrow buy 1kg of food", TODO1 )
const TODO3 = new TODO ("my food", "friday 9am", TODO2 )

function TODOs(head) {
    let current = head;
    while (current !== null) {
      console.log(`Title: ${current.title}`);
      console.log(`Description: ${current.description}`);
      console.log("////");
      current = current.next;
    }
  }

TODOs(TODO3);
