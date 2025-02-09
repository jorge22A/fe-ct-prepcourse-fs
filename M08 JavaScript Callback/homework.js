/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   let pnombre = nombre[0].toUpperCase()+nombre.slice(1).toLowerCase()
   console.log(pnombre)


}
mayuscula('jorge')


function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   return cb()
}
function nada(){
    return undefined
    
}


let resultado = invocarCallback(nada)
console.log(resultado)


function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   return sumar(num1,num2)
}
function sumar(num1,num2){
   return num1 + num2
}
let adicion= operacionMatematica(1,2,sumar)

console.log(adicion)


function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   let total =0
    for(let i =0; i<=arrayOfNumbers.length-1;i++){
        total=total+arrayOfNumbers[i]
    }
    return recibido(total)
   }
   function recibido(total){
        }
    sumarArray([1,2],recibido)
   


function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   array.forEach((num) => {
      return recibir(num)}
  )
}
function recibir(num){
  console.log('elemento: '+num)
}
forEach([1,2],recibir)




function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   array.map( (elemento) => { return vuelta(elemento)  } )
}
function vuelta(elemento){
    
    console.log(elemento)
}
map([1,2],vuelta)




function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let arreglo = []
arrayOfStrings.map( (le) => { if(le.charAt(0)=='a'){
    arreglo.push(le)
    return arreglo} } )

console.log(arreglo)
}
filter(['as', 'dos' , 'ases' ,'cuatro'  ])



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
