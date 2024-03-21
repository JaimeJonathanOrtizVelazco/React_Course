import { getHeroeById, getHeroesByOwner } from "./bases/08-import-export";



const promesa = new Promise((resolve, reject)=>{
    setTimeout(() => {
        const heroe= getHeroeById(2);
        // resolve(heroe);
        reject("No se puedo encontrar el heroe")
    }, 2000);
});

promesa.then((heroe)=>{
    console.log(heroe)
})
.catch((err)=>{
console.warn(err)
})


const getHeroeByIdAsync = (id)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const heroe= getHeroeById(id);
            if(heroe){
                resolve(heroe);
            }
            reject("No se puedo encontrar el heroe")
        }, 2000);
    });
}

getHeroeByIdAsync(3).then(console.log)
.catch(console.warn)