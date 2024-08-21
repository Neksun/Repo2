/////////Karol payares 2221343
class Books{
    constructor(Name,ISBN,Author,Editorial){
        this.Name=Name
        this.ISBN=ISBN
        this.Author=Author
        this.Editorial=Editorial

    }
}

let Book1= new Books('Crepusculo',1,'Charlote','el buho');
let Book2= new Books('Cencicienta',2,'WaltDisney','Disney');
let Book3= new Books('geissha del futuro',3,'Victoria','el buho');
let Book4= new Books('empresario atrevido',4,'jhon lenon','casa bonita');
let Book5= new Books('humana a conejo',5,'yukio','casa bonita');
let Book6= new Books('humana a pajaro',6,'yukio','casa bonita');


function printTODOs(todo) {
    while (todo) {
      console.log("Title:", todo.title);
      console.log("Description:", todo.description);
      console.log("Points to:", todo.pointsToNext ? todo.pointsToNext.title : "None");
      console.log("\n");
      todo = todo.pointsToNext;
    }
  }

printTODOs(todo);
