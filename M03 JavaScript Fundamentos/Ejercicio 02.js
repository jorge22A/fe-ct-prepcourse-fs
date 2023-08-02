/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string
}
console.log(devolverString('texto'))

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   console.log(x+y)
}
suma(4,5)

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   console.log(x-y)
}
resta(4,5)

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   return x/y
}
console.log(divide(4,5))

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   return x*y
}
console.log(multiplica(4,5))

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   console.log(x%y)
}
obtenerResto(4,5)

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
