const persona = {
  nombre: 'Tony',
  apellido : 'Stark',
  edad: 45,
  direccion : {
    ciudad: 'New York',
    zip : 5234234,
    lat: 14.3233,
    lng: 34.9233213
  }
};

console.table({persona})

const persona2 = { ...persona};

persona2.nombre = 'Petter';
console.log(persona2);
console.log(persona);