const nombre = 'Joma';
const apellido = 'Vel';

const nombreCompleto = ` Hola Mundo ${nombre}`
console.log(nombreCompleto)


function getSaludo(nombre){
  return 'Hola Mundo' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`)