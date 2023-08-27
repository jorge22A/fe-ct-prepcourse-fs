/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let array = Object.entries(objeto);

    console.log(array);
 }
 deObjetoAarray({cero:0, uno:1, dos:2})




function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let arr = string.split('')

let arreglo =arr.sort()
let cadena = arreglo.join('')

let llaves = {};

for (var i = 0; i < cadena.length; i++) {
  var caracter = cadena.charAt(i);

 
  if (llaves.hasOwnProperty(caracter)) {
    llaves[caracter]++;
  } else {
    
    llaves[caracter] = 1;
  }
}

console.log(llaves)

}
numberOfCharacters('aaajjhdghdgdgggggga')




function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let mit = string.length/2
let STR=''
for(let i = 0; i<=mit-1; i++){
  STR=STR+string[i]
}
console.log(STR.toUpperCase()+string.slice(mit).toLowerCase())
}
capToFront('jorGEE')




function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let cadena = frase.split(' ')

 
   let cadenaInvertida = cadena.map(palabra => {
     
     return palabra.split('').reverse().join('')
   })
 
  
   const fraseInvertida = cadenaInvertida.join(' ')
 
   console.log( fraseInvertida)
 }
 asAmirror('Carpe diem')



function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let astring = (numero).toString()
    let stringa = astring.split('').reverse().join('')
    if(astring==stringa){
      console.log('es capicua')
    } else{
      console.log('no es capicua')
    }
 }
 capicua(80008)



function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let arr=string.split('')

let palabra=''

for(let i=0;i<=arr.length-1;i++){
 if(arr[i]=='a' || arr[i]=='b' || arr[i]=='c'){

delete(arr[i])}

else {palabra=palabra+arr[i]}
}
console.log(palabra)
}
deleteAbc('sin a sin b sin c')



function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort((a, b) => a.length - b.length)

console.log(arrayOfStrings)
}
sortArray(["uno", "dos", "tres", "cuatro", "cinco"])




function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let arreglo1=[]
   let arreglo2=[]
   let arreglo=[]
   if(array1.length<array2.length){
     arreglo1=array1
     arreglo2=array2
   } else {
     arreglo1=array2
     arreglo2=array1
   }
   for(let i=0; i<=arreglo1.length;i++){
     if(arreglo2.includes(arreglo1[i])==true){
     arreglo.push(arreglo1[i])
     }
   }
   return arreglo
 }
 console.log(buscoInterseccion([1,2,3],[5,6,7,8,9]))




/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
