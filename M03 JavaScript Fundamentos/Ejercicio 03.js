/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   if(x==y){
            console.log('son iguales')
   } else{
            console.log(false)
   }
}
sonIguales(5,5)

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   if(str1.lenght===swtr2.lenght){
      console.log(true)
} else{
      console.log(false)
}
}
tienenMismaLongitud('hola','mundo')

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   if(num<90){
      console.log(true)
} else{
      console.log(false)
}
}
menosQueNoventa(45)

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   if(num>50){
      console.log(true)
} else{
      console.log(false)
}
}
mayorQueCincuenta(51)

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   if(num%2==0){
      return 'es par'
} else{
      return false
}
}
console.log(esPar(1))

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   if(num%2!==0){
      return 'es impar'
} else{
      return false
}
}
console.log(esImpar(2))

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
