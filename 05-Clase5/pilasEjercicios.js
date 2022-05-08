class Stack{
  constructor(){
    this.items = []
  }

  push(i){
    this.items.push(i)
  }

  pop(){
    return this.items.pop()
  }

  peek(){
    return this.items[this.items.length-1]
  }

  size(){
    return this.items.length
  }

  print(){
    console.log(this.items)
  }
}
/*1.- Hacer una función que reciba como parámetros una pila, y un número.
La función debe retornar tantos elementos como diga el número, de arriba para abajo (segundo parámetro).
*/

const stack = new Stack()

stack.push('Manzana')
stack.push('Cebolla')
stack.push('Apio')
stack.push('Naranja')
stack.push('Papaya')
stack.push('Sandía')
stack.push('Melón')

retornarElementos = (stack, num) =>{
  const newArr = []
  for(let i=0;i<num; i++){
    newArr.push(stack.pop())
  }
  return newArr
}

// console.log(retornarElementos(stack,4))

/*2.- Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number, y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
*/

const stackDos = new Stack()

stackDos.push(3)
stackDos.push(2)
stackDos.push(3)
stackDos.push(4)
stackDos.push(6)
stackDos.push(8)
stackDos.push(1)
stackDos.push(2)
stackDos.push(5)
stackDos.push(5)

reemplazar = (stack, nuevo_n, viejo_n) =>{
  let item
  let len = stack.size()
  for(let i=0; i<len;i++){
    item = stack.pop()
    if(item === viejo_n){
      stack.push(nuevo_n)
      break
    }
  }
  return stack.print()
}

// stackDos.print()
// reemplazar(stackDos,7,2)

/*3. Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios
pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo
camino. Muestre el camino recorrido tanto de ida como de vuelta. 
*/

const stackTres = new Stack()

stackTres.push("Origen")
stackTres.push("Pueblo1")
stackTres.push("Pueblo2")
stackTres.push("Destino")

camino_recorrido = stack =>{
  // let item
  let len = stack.size()
  let arr = []
  stack.print()
  for(let i=0; i<len;i++){
    arr.push(stack.pop())
  }
  return arr
}

console.log(camino_recorrido(stackTres))


/*
4.-  Un almacén tiene capacidad para apilar “n” contenedores. Cada contenedor tiene una posición. Cuando se desea retirar un contenedor específico, deben retirarse primero los contenedores que están encima de él y colocarlos en otra pila, efectuar el retiro y regresarlos a su respectivo lugar.
 
(Tip: puedes usar un stack “auxiliar”)
*/

const stackCuatro = new Stack()

stackCuatro.push(3)
stackCuatro.push(2)
stackCuatro.push(3)
stackCuatro.push(4)
stackCuatro.push(6)
stackCuatro.push(8)
stackCuatro.push(1)
stackCuatro.push(2)
stackCuatro.push(5)
stackCuatro.push(5)

retirar_contenedor = (stack, pos) =>{
  let arr = []
  let arrDos = []
  len = stack.size()

  for(let i=0;i<len;i++){
    arr.push(stack.pop())
  }

  for(let i=0;i<len;i++){
    arrDos.push(arr.pop())
    if(i === pos){
      arrDos.pop()
    }
  }

  return arrDos
}

stackCuatro.print()
console.log(retirar_contenedor(stackCuatro, 4))

