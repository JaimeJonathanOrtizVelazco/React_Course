const personajes = ['goku','vegeta','trunks'];

const [,,p3] = personajes;

console.log(p3)

const retornoArreglo= () =>{
  return ['ABC', 123];
}

const [letras, numeros] = retornoArreglo();
console.log(letras, numeros)

const printCosa = (valor) =>{
  return [valor, ()=>{console.log('Hola mundo')}];
}

const [nombre, setNombre]= printCosa('Gokun');
console.log(nombre)
setNombre()