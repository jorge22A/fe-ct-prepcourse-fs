/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0]
}
console.log(devolverPrimerElemento([1,2,3,4,5]))


function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   console.log(array[array.length-1])
}
devolverUltimoElemento([1,2,3,4,])



function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length
}
console.log(obtenerLargoDelArray([0,1,2,3,4]))



function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   console.log(array.length+1)

}
incrementarPorUno([1,2,3,4])


function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento)
   return array
}
console.log(agregarItemAlFinalDelArray([1,2,3,4],5))


function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento)
    console.log(array)
 }
 agregarItemAlComienzoDelArray([2,3,4,5],1)


function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   let palabra=palabras.split('')
   console.log(palabra)
}
dePalabrasAFrase('frase')


function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento)
}
console.log(arrayContiene([1,2,3,4],0))


function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let suma = 0
arrayOfNums.forEach( (num) => { suma=suma+num } )
console.log(suma)
}
agregarNumeros([1,2,3,4])


function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let suma = 0
   
   resultadosTest.forEach( (num) => { 
       console.log (num)
       suma=suma+num } )
   
   
   console.log('promedio: ',suma/resultadosTest.length)
   }
   promedioResultadosTest([1,2,3,4])


function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   let mayor = 0
   
 arrayOfNums.forEach( (num) => { 
     if (num>mayor){
        mayor=num 
     }
      } )
 
 
 return mayor
    }
    console.log(numeroMasGrande([1,5,3,4,2]))


function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if(arguments.length==0){
      console.log(0)
   }
   else if(arguments.length==1){
      console.log(arguments[0])
   }  
   else{let producto =1
      for(let i=0; i<arguments.length; i++){
      producto = producto*arguments[i]
   }

  

   
   console.log(producto)
}
}
 
 multiplicarArgumentos()
 


function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let cantidad =0
array.forEach( (num) => { 
   if (num>18){
      cantidad = cantidad +1}
   })
   return cantidad
}
console.log(cuentoElementos([1,2,33,44,55]))


function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if(numeroDeDia>1&&numeroDeDia<7){
      console.log("Es dia laboral")
   }else{
      console.log("Es fin de semana")
   }
}
diaDeLaSemana(2)


function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   let num1 =0
for(i=0;i<num;i++){
   if (num<Math.pow(10,i)){
      
      num1 =((num/Math.pow(10,i))*10)
      break
   }
}
if (Math.floor(num1)==9 && Math.floor(num)==num){
   console.log(Math.floor(num1)==9 && Math.floor(num)==num)
} else {
   console.log(Math.floor(num1)==9 && Math.floor(num)==num)
}
}
empiezaConNueve(987665)


function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   let numero0 = array [0]
 let igual = (num) => num == numero0
 
 let siempre = (array.every(igual))
 console.log(siempre)
 
 }
 todosIguales([1,1])

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   let array2 =[]
   let emn = array.includes('Enero')
   let emn1 = array.includes('Marzo')
   let emn2 = array.includes('Noviembre')
   
   if (emn==true && emn1==true && emn2==true){
       array2[0]= 'Enero'
       array2[1]= 'Marzo'
       array2[2]= 'Noviembre'
   
   } else{
       return "No se encontraron los meses pedidos"
   }
   return array2
   }
   console.log(mesesDelAño(['Noviembre','Enero', 'Marzo',  'Julio']))


function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let arreglo = []
   for(let i = 0; i<61;i++){
       arreglo[i]= 6*i

   }
   console.log(arreglo)
}
tablaDelSeis()


function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let arreglo = []
array.forEach( (num) => { 
    if(num>100){
        arreglo.push(num);
    }
} )
console.log(arreglo)
}
mayorACien([1,200,3,400])

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let i = 0
   let arreglo =[]

   while(i < 10) {
       i = i + 1;
       num = num +2
       
           
           if(num!==i){
               
               arreglo.push(num)
               
           } else {
               console.log(arreglo, 'Se interrumpió la ejecución')
               break
              
              

           }
       }
       if (i==10){
           console.log(arreglo)}
   }
   breakStatement(-6)
  


function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let i = 0
 let array =[]

 while(i < 10) {
     i = i + 1;
     
     
     
         
         if(i==5){
            continue
            
             
             
             
         } else {
            num = num +2
            array.push(num)
            
             
            
            

         
         
     }
    }
     
         return array
        }
    
 
 console.log(continueStatement(0))


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
