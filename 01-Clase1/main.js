// 1. Determina si una oracion o palabra es palíndroma

palindrome = oracion => {
  oracion = oracion.replace(/ /g, "")

  arregloP = oracion.split("")
  invertirArreglo = arregloP.reverse()
  unirArreglo = invertirArreglo.join("")

  if(oracion === unirArreglo){
    return true
  }
  else{
    return false
  }
}
console.log(palindrome('anita lava la tina'))



//2. Convertir grados Farenheit a Celsius
farenheitToCelsius = farenheit => celsius = (farenheit - 32) * (0.5556)

console.log(farenheitToCelsius(75))



// 4. Mostrar los valores y la cantidad de parámetros
parametrosEnviados = (...param) =>{
  let parametros = [...param]
  return `Parametros ingresados: ${parametros}
  cantidad de parámetros: ${parametros.length}`
}

console.log(parametrosEnviados(2,3,4,5))



