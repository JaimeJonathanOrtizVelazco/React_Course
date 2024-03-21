
const persona= {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman'
}

const {nombre, edad,clave} = persona;
console.log(nombre)
console.log(edad)
console.log(clave)

const printPersona = ({clave,nombre,edad,rango = 'Capitan'}) =>{
  return {
    nombreClave: clave,
    anios: edad,
    latlng : {
      lat: 14.23434,
      lng: -12.234234
    }
  }
}
const {nombreClave , anios, latlng: {lat,lng}} = printPersona(persona)
console.log(nombreClave)
console.log(anios)
console.log(lat)
console.log(lng)
