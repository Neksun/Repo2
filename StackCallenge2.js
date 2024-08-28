/////////Karol payares 2221343
class Books{
    constructor(Name,ISBN,Author,Editorial){
        this.Name=Name
        this.ISBN=ISBN
        this.Author=Author
        this.Editorial=Editorial

    }
}
// Crear la pila de libros
let bookStack = [];

// Llenar la pila con ejemplos de libros
bookStack.push(new Books('Crepúsculo', 1, 'Stephenie Meyer', 'El Búho'));
bookStack.push(new Books('Cenicienta', 2, 'Walt Disney', 'Disney'));
bookStack.push(new Books('Geisha del Futuro', 3, 'Victoria', 'El Búho'));
bookStack.push(new Books('Empresario Atrevido', 4, 'John Lennon', 'Casa Bonita'));
bookStack.push(new Books('Humana a Conejo', 5, 'Yukio', 'Casa Bonita'));
bookStack.push(new Books('Humana a Pájaro', 6, 'Yukio', 'Casa Bonita'));

// Función para imprimir los libros en la pila
function printBooks(stack) {
  while (stack.length > 0) {
      let book = stack.pop();  // Extraer el último libro de la pila
      console.log("Nombre:", book.Name);
      console.log("ISBN:", book.ISBN);
      console.log("Autor:", book.Author);
      console.log("Editorial:", book.Editorial);
      console.log("////////////");
  }
}

// Llamada a la función para imprimir los libros
printBooks(bookStack);

