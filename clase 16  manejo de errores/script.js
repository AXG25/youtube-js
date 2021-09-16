 /* **********     Curso JavaScript: 16. Manejo de Errores - #jonmircha     ********** */
 /* try {
       console.log("En el Try se agrega el código a evaluar");
       noExiste;
       console.log("Segundo mensaje en el try");
     } catch (error) {
       console.log("Catch, captura cualquier error surgido o lanzado en el try");
       console.log(error);
     } finally {
       console.log("El bloque finally se ejecutará siempre al final de unbloque try-catch");
     }*/
 
//  try {
//     console.log("todo anda bien");
//     noExiste;
//   } catch (error) {
//     console.log("ups cometiste un error:");
//     console.log(error);
//   } finally {
//     console.log("prueba terminada");
//   }   
 
 try {
       let numero = prompt("ingrese un numero");
       
       // isNaN = no es un numero. es una funcion que tu le pasas un numero y si no es un numero te va a devolver true y si es un numero regresa false
       // aca estamos diciendo que si isNaN comprueba efectivamente que la variable numero no es un numero entonces que se ejecute la funcion lanzar un nuevo error(throw new Error)
       if (isNaN(numero)) {
           // throw new Error = lanzar un nuevo error
         throw new Error(` El caractér introducido no es un Número. usted introdujo: ${numero}`);
       }
       else { // en caso de que la variable numero si sea un numero
           alert(numero * numero);
    }
       
     } catch (error) {
       alert(`Ups se ha producido un ${error}`);
     } 

