
class Node {
    constructor(name, birthdate, depth) {
        this.name = name;
        this.birthdate = birthdate;
        this.depth = depth; //profundidad para el arbol
        this.children = [];
    }
}

class NaryTree {
    constructor() {
        this.root = null;
    }

    search(value, node = this.root) {
        if (!node) return null;
        if (node.name === value) return node;

        for (let child of node.children) {
            let result = this.search(value, child);
            if (result) return result;
        }
        return null;
    }

    insert(name, birthdate, parentName = null) {
        if (!this.root) {
            this.root = new Node(name, birthdate, 1); 
        } else {
            const parentNode = this.search(parentName);
            if (parentNode) {
                if (parentNode.depth < 3) { 
                    const newNode = new Node(name, birthdate, parentNode.depth + 1);
                    parentNode.children.push(newNode);
                } else {
                    console.log("Cannot add more generations beyond the third one.");
                }
            } else {
                console.log(`Parent ${parentName} not found.`);
            }
        }
    }

    // Recorrido en Preorden
    preorder(node = this.root) {
        if (node) {
            console.log(`${node.name}, ${node.birthdate}`);
            for (let child of node.children) {
                this.preorder(child);
            }
        }
    }

    // Recorrido en Postorden
    postorder(node = this.root) {
        if (node) {
            for (let child of node.children) {
                this.postorder(child);
            }
            console.log(`${node.name}, ${node.birthdate}`);
        }
    }

    // Recorrido en Inorden
    inorder(node = this.root) {
        if (node) {
            const half = Math.floor(node.children.length / 2);
            for (let i = 0; i < half; i++) {
                this.inorder(node.children[i]);
            }
            console.log(`${node.name}, ${node.birthdate}`);
            for (let i = half; i < node.children.length; i++) {
                this.inorder(node.children[i]);
            }
        }
    }
}

// Ejemplo de uso:
let familyTree = new NaryTree();
familyTree.insert("John Doe", "1945-06-15");  // Raíz
familyTree.insert("Jane Doe", "1968-09-22", "John Doe");
familyTree.insert("Paul Doe", "1990-03-12", "Jane Doe");
familyTree.insert("Mark Doe", "1993-11-20", "Jane Doe");
//familyTree.insert("Sam Doe", "2020-05-10", "Paul Doe");  // No debería permitirse, ya que sería la cuarta generación

console.log("Preorder Traversal:");
familyTree.preorder();

console.log("\nPostorder Traversal:");
familyTree.postorder();

console.log("\nInorder Traversal:");
familyTree.inorder();
