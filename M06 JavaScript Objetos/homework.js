/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   let objeto={}
  objeto.nombre= nombre
  objeto.edad= edad
  objeto.meow= function(){
    return 'Meow!'
  }
  return objeto
 
}
console.log(crearGato('Mich',2))
console.log(crearGato().meow())

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
  console.log(nobjeto={nombre: nombre, email: email, password: password})
    }
    nuevoUsuario('Juan', 'juanperez@jpez', 'kjdfh27846' )
    

    let nobjeto ={}
    let uno = nobjeto
function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   objeto={}
     nobjeto[propiedad]=`null`
     return nobjeto
}
console.log(agregarPropiedad(uno,'array'))


function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
   objeto[metodo]=function interior(){}
 
 return objeto
}


console.log(invocarMetodo(nob={},'funcion'))


function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   let objeto={}
   objeto[objetoMisterioso]
   objeto.objetoMisterioso= objetoMisterioso*5

  return objeto.objetoMisterioso
}
console.log(multiplicarNumeroDesconocidoPorCinco(5))


function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   objeto[propiedad]
   objeto.nombre='jorge'
   delete objeto.nombre
   console.log(nob)
 }
 eliminarPropiedad(nob={},'nombre')


function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   objetoUsuario.ntelefono=3
   console.log(objetoUsuario.hasOwnProperty('email'))}
   tieneEmail(obj={whatsapp:true})


function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   console.log(objeto.hasOwnProperty(propiedad))
}

tienePropiedad(objeto1={nombre:'jorge', apellido:'acosta', email:'jorgac@jjaacc'}, 'edad')


function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   let comparar =objetoUsuario.password
   if (comparar==password){
     console.log(comparar==password)
   } else{
     console.log(comparar==password)
   }
 }
 verificarPassword(objeto={password:'d0c3&!'}, '0nC3?')


function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
}

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   let objeto={usuario:'guest' , password:'0+3478476'}
   objetoUsuario= objeto
   objeto.password=nuevaPassword
 
 
 
   console.log(objeto)}
   actualizarPassword(beta={}, '14Dic')


function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   let userss={daniel:{ esPremiun:true}, marcelo:{esPremiun:true}}
userss[objetoMuchosUsuarios]={esPremiun:true}
objetoMuchosUsuarios=userss
console.log(objetoMuchosUsuarios)

}
pasarUsuarioAPremium('jorge')


function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   let arrai=objetoUsuario.posts
   console.log(arrai.length)}
   sumarLikesDeUsuario(objeto={uno:1, posts:[post={likes:1}, post1={likes:1},post2={likes:1},post3={likes:1}]})


function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   objetoProducto.calcularPrecioDescuento= function(){
      let precioFinal = objetoProducto.precio-objetoProducto.precio*objetoProducto.porcentajeDeDescuento
     
     return precioFinal
   }
   }
     agregarMetodoCalculoDescuento(objeto={precio:500, porcentajeDeDescuento:0.15})
     console.log(objeto.calcularPrecioDescuento())


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
