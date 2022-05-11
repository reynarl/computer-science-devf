// 2.- Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo, llegada la hora de inicio hay muchos “colados”, es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket. Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.
 
// Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.

class Queue {

  constructor() {
      this.items = []
  }

  enqueue(item) {
      this.items.push(item)
  }
  
  dequeue() {
      return this.items.shift()
  }
  
  peek() {
      return this.items[0]
  }
  
  size() {
      return this.items.length
  }
  
  print() {
      console.log(this.items)
  }
  
  isEmpty() {
      return this.items.length == 0
  }
  
  front() {
      return this.peek()
  }
  
  back() {
      return this.items[this.items.length - 1]
  }
}

const queue = new Queue()

queue.enqueue({ user:'User1', ticket:true   })
queue.enqueue({ user:'User2', ticket:true   })
queue.enqueue({ user:'User3', ticket:false  })
queue.enqueue({ user:'User4', ticket:true   })
queue.enqueue({ user:'User5', ticket:false  })
queue.enqueue({ user:'User6', ticket:false  })
queue.enqueue({ user:'User7', ticket:true   })
queue.enqueue({ user:'User8', ticket:true   })
queue.enqueue({ user:'User9', ticket:true   })
queue.enqueue({ user:'User10', ticket:false })
queue.enqueue({ user:'User11', ticket:true  })


sin_colados = queue =>{
  let colados = new Queue()
  let len = queue.size()

  console.log('inicial')
  queue.print()

  for(let i=0; i<len; i++){
    if(queue.peek().ticket){
      queue.enqueue(queue.dequeue())
    }
    else{
      colados.enqueue(queue.dequeue())
    }
  }
  console.log(`inicial: ${queue.print()}`)
  colados.print()
}

console.log(sin_colados(queue))