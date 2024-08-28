// Clase para representar un nodo en el árbol binario- IA para hacer esta version
class TreeNode {
    constructor(name, birthdate) {
        this.name = name;          // Nombre completo de la persona
        this.birthdate = birthdate; // Fecha de nacimiento de la persona
        this.left = null;          // Referencia al hijo izquierdo
        this.right = null;         // Referencia al hijo derecho
    }
}

// Clase para representar el árbol binario
class BinaryTree {
    constructor() {
        this.root = null;  // Inicialmente, el árbol no tiene una raíz
    }

    // Método para insertar un nuevo nodo en el árbol
    insert(name, birthdate) {
        const newNode = new TreeNode(name, birthdate);  // Crea un nuevo nodo
        if (this.root === null) {
            this.root = newNode;  // Si el árbol está vacío, el nuevo nodo es la raíz
        } else {
            this.insertNode(this.root, newNode);  // De lo contrario, se inserta en la posición correcta
        }
    }

    // Función auxiliar para insertar un nodo en la posición correcta del árbol
    insertNode(node, newNode) {
        if (newNode.name < node.name) {
            // Si el nombre del nuevo nodo es menor, va a la izquierda
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);  // Se sigue buscando la posición correcta en el subárbol izquierdo
            }
        } else {
            // Si el nombre del nuevo nodo es mayor o igual, va a la derecha
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);  // Se sigue buscando la posición correcta en el subárbol derecho
            }
        }
    }

    // Método para recorrer el árbol en preorden (raíz, izquierda, derecha)
    preorder(node = this.root) {
        if (node !== null) {
            console.log(`${node.name}, ${node.birthdate}`);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    // Método para recorrer el árbol en inorden (izquierda, raíz, derecha)
    inorder(node = this.root) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(`${node.name}, ${node.birthdate}`);
            this.inorder(node.right);
        }
    }

    // Método para recorrer el árbol en postorden (izquierda, derecha, raíz)
    postorder(node = this.root) {
        if (node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(`${node.name}, ${node.birthdate}`);
        }
    }
}

// Ejemplo de uso
let familyTree = new BinaryTree();
familyTree.insert("John Doe", "1945-06-15");
familyTree.insert("Jane Doe", "1968-09-22");
familyTree.insert("Paul Doe", "1990-03-12");
familyTree.insert("Mark Doe", "1993-11-20");

console.log("Preorder Traversal:");
familyTree.preorder();

console.log("\nInorder Traversal:");
familyTree.inorder();

console.log("\nPostorder Traversal:");
familyTree.postorder();
