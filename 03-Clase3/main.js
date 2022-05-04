/* Hacer superclase Maestro y subclases Maestro de Física y 
   Maestro de Música y a cada uno asignarle su materia y 
   calcular su promedio de grupo a partir de calificaciones	 
   (puedes usar arreglos).

   El maestro de física tiene un 
   atributo "antigüedad" que guarda un valor numérico, 
   mientras que el maestro de música tiene un atributo "edad"
   también guardando un valor numérico.*/


class Maestro{
  constructor(materia){
    this.materia = materia
  }
  
  calcular_promedio(...calificaciones){
    let suma = 0
    for(let i=0; i<calificaciones.length; i++){
      suma = suma + calificaciones[i]
    }
    return `El promedio es: ${suma/calificaciones.length}`
  }
}

class MaestroFisica extends Maestro{
  constructor(materia, antiguedad){
    super(materia)
    this.antiguedad = antiguedad
  }
}

class MaestroMusica extends Maestro{
  constructor(materia, edad){
    super(materia)
    this.edad = edad
  }
}

const maestroFisica = new MaestroFisica('Reyna', 5)

console.log(maestroFisica)
console.log(maestroFisica.calcular_promedio(8,8,8,8,8))

const maestroMusica = new MaestroMusica('Fernando', 22)
console.log(maestroMusica)
console.log(maestroMusica.calcular_promedio(9,10,10,9))

/*2.- Crear la clase construcción que hereda a otras dos 
    clases "casa" y "edificio". 
    a. Atributos son: numPuertas, numVentanas, numPisos direccion, altura, largo y ancho del terreno.
    b. Método que regresa los metros cuadrados
    c. Un método debe regresar la direccion
    d. Un método debe permitir modificar la direccion
*/

class Construccion{
  constructor(numPuertas, numVentanas , numPisos, direccion, altura, largo, ancho){
    this.numPuertas = numPuertas
    this.numVentanas = numVentanas
    this.numPisos = numPisos
    this.direccion = direccion
    this.altura = altura
    this.largo = largo
    this.ancho = ancho
  }

  metros_cuadrados(){
    return `m2: ${this.largo*this.ancho}`
  }

  getDireccion(){
    return this.direccion
  }

  setDireccion(nuevaDir){
    this.direccion = nuevaDir
  }
}

class Casa extends Construccion{
  constructor(numPuertas, numVentanas , numPisos, direccion, altura, largo, ancho){
    super(numPuertas, numVentanas , numPisos, direccion, altura, largo, ancho)
  }
}

const casa = new Casa(1,2,2,'Col. Montes Urales',6,7,5)
console.log(casa)
console.log(casa.metros_cuadrados())
console.log(casa.getDireccion())
casa.setDireccion('Col. Montes verdes')
console.log(casa.getDireccion())


/*4.- Crea una superclase llamada Electrodoméstico con las 
    siguientes características:
    a. Sus atributos son precio, color, consumoEnergetico
       y capacidad (peso máximo)
    b. El constructor solo debe pedir precio, color 
       y capacidad. 
    c. consumoEnergetico debe iniciar con valor de 100*/

class Electrodomestico {
  constructor(precio,color,capacidad){
    this.precio = precio
    this.color = color
    this.capacidad = capacidad
    this.consumoEnergetico = 100
  }
}

const electrodomestico = new Electrodomestico(500, 'verde', 10)

console.log(electrodomestico)

/*5.- Crea una subclase de Electrodomestico llamada Lavadora 
    con las siguientes características:
    a. Su atributo es carga(kg de ropa), además de los 
       atributos heredados.
    b. Crea el método precioFinal(). Este se calcula
       multiplicando el consumoEnergetico por la carga.
*/

class Lavadora extends Electrodomestico{
  constructor(precio,color,capacidad,carga){
    super(precio,color,capacidad)
    this.carga = carga
  }

  precioFinal(){
    return `Precio final: ${this.carga*this.consumoEnergetico}`
  }
}

const lavadora = new Lavadora(100,'rojo',5,4)
console.log(lavadora)
console.log(lavadora.precioFinal())

