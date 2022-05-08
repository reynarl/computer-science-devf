//1. Definir una clase

class Stack {
  constructor(){
    this.items = []
  }

  //agrega un nuevo valor a la pila, ubicándolo al final de esta
  push(item){
    this.items.push(item)
  }
  //retorna el último valor ingresado a la pila, sacándolo
  pop(){
    return this.items.pop()
  }
  //retorna el último valor sin sacarlo de la pila
  peek(){
    return this.items[this.items.length-1]
  }
  //retorna el número de elementos que contiene la pila
  size(){
    return this.items.length
  }
  //Muestra el contenido de la pila
  print(){
    console.log(this.items)
  }
}

let pila = new Stack()

pila.push(1)
pila.push(2)
pila.push(3)
pila.push(4)

console.log(pila.print())
console.log(pila.size())
console.log(pila.pop())
console.log(pila.print())
console.log(pila.peek())