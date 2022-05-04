class Animal{
  constructor(brain, legs){
    this.brain = true,
    this.legs = 0
  }
}

//herencia: human extiende de animal
class Human extends Animal{ 
  constructor(){
    //para modificar los atributos de la clase principal usamos la palabra super
    super().legs = 2 
  }

  tiene_cerebro(){
    return this.brain
  }
}

class Pet extends Animal{
  constructor(){
    super().legs = 4,
    this.fleas = 0
  }

  bañar(){
    return this.fleas = 0
  }
}


class Dog extends Pet{
  constructor(){
    super().fleas = 4
  }
}

const Gummy = new Dog()
console.log(Gummy.bañar())

//-------------------

class Persona {
  constructor(nombre){
    this.nombre = nombre
    this.hambre = 100
  }

  caminar(){
    return 'moviendo pies'
  }

  comer(){
    this.hambre = 0
  }
}

class Maestro extends Persona{
  constructor(nombre,titulo, materia){
    super(nombre)
    this.titulo = titulo
    this.materia = materia
  }

  calificar(){
    return 'calificando...'
  }

  reprobar(alumno){
    return alumno.reprobado(this)
  }
}

class Alumno extends Persona{
  constructor(nombre){
    super(nombre)
  }
  reprobado(profesor){
    return `${this.nombre} fue reprobado por ${profesor.nombre} en la materia ${profesor.materia}`
  }
}

const maestro = new Maestro('Reyna','ITTG', 'Matematicas')
console.log(maestro)

const alumno = new Alumno('Carmen')
console.log(alumno)

console.log(maestro.reprobar(alumno))
