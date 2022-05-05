//Creando funciones con prototype

function Alumnos(nombre, apellido, califFinal, inscrito){
  this.nombre = nombre;
  this.apellido = apellido;
  this.califFinal = califFinal;
  this.inscrito = inscrito
}

let alumno = new Alumnos("Reyna", "López", 80, "inscrito")

Alumnos.prototype.ObtenerInicialesDeAlumno = function() {
  return `Iniciales: ${this.nombre.substring(0,1)}${this.apellido.substring(0,1)}`
}

Alumnos.prototype.ObtenerNombreCompleto = function(){
  return `Nombre: ${this.nombre} ${this.apellido}`
}

console.log(alumno.ObtenerNombreCompleto())
console.log(alumno.ObtenerInicialesDeAlumno())


//--------------------------------------------

function Maestro(materia, ...calificaciones){
  this.materia = materia
  this.calificaciones = calificaciones
}

function MaestroFisica(materia,antiguedad, ...calificaciones){
  Maestro.call(this,materia, calificaciones)
  this.antiguedad = antiguedad
}


MaestroFisica.prototype = Object.create(Maestro.prototype)

MaestroFisica.prototype.constructor = MaestroFisica

// let maestro = new Maestro('mates',1,2,3)
let maestroFisica = new MaestroFisica('mates',3,1,2,3,4)
console.log(maestroFisica)
