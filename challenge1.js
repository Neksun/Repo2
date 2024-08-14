class TODO{
    constructor(title, description, next=null){
        this.title= title;
        this.description= description;
        this.next=next;

    }
}
const TODO1 = new TODO ("the cat", "this is a cat",)
const TODO2 = new TODO ("the dog", "this is a dog", )
const TODO3 = new TODO ("the bird", "this is a bird", )

function TODOs(head) {
    let current = head;
    while (current !== null) {
      console.log(`Title: ${current.title}`);
      console.log(`Description: ${current.description}`);
      console.log("----");
      current = current.next;
    }
  }
