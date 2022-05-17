class Node{
  constructor(data){
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinaryTree{
  constructor(){
    this.root = null
  }

  insert(data){
    let nodito = new Node(data)
    //null es falso
    //if(null) -> entra al else
    //if(!null) -> entra al if
    if(!this.root){ 
      this.root = nodito
    }
    else{
      let current = this.root
      // Explorar el árbol
      while(true) {
        if(current.right != null && current.data < node.data) {
          current = current.right
          } else if (current.left != null && current.data > node.data) {
            current = current.left
          } else {
              break
            }
          }

          // Llegamos a nuestro destino y asignamos
          if(current.right == null && current.data < node.data) {
              current.right = node
          } else if (current.left == null && current.data > node.data) {
              current.left = node
          }
    }
  }
}

let nuevoArbol = new BinaryTree()
nuevoArbol.insert(2)

// let raiz = new BinaryTree()
// let nodito = new Node(9)

// raiz.root = nodito

// let nodito2 = new Node(10)
// raiz.root.left = nodito2