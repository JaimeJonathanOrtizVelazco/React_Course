const saludar = function(nombre){
return `Hola, ${nombre}`;
}

const saludar2 = (nombre)=>{
  return `Hola, ${nombre}`;
}

const saludar3 = (nombre)=>`Hola, ${nombre}`;

console.log(saludar3('Goku'));

const getUser= ()=>{
  return {
    uid: 'ABC123',
    username: 'EL_Papis'
  }
}
const getUser2= ()=>({
    uid: 'ABC123',
    username: 'EL_Papis'
  });

console.log(getUser2())

function getUsuarioActivo(nombre){
  return {
    uid: 'ABC123',
    username: 'EL_Papis'
  }
}

const getUsuarioActivo2 =(nombre) =>({
  uid: 'ABC123',
  username: nombre
})

const usuarioActivo = getUsuarioActivo2('Fernando');
console.log(usuarioActivo)