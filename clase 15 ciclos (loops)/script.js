 /* **********     Curso JavaScript: 15. Ciclos (Loops) - #jonmircha     ********** */
//while y dowhile estan cayendo en desuso
    let contador = 0; 
      /*while = mientras */
    //   while (contador <= 10) { //esta linea por si sola crearia un bucle infinito 
    //    console.log("numero " + contador);
    //    contador++;// esta linea aumenta la variable contador de 1 en 1 cada vez que ciclo se repite hasta que contador no sea menor a 10
    //  }
    // /*dowhile = hacer mientras*/
    // //La sentencia (hacer mientras) crea un bucle que ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa como falsa. La condición se evalúa después de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecute al menos una vez.
    //  do {
    //    console.log("do while " + contador);//estas dos lineas
    //    contador++;                         //deben cumplirse si o si
    //  } while (contador < 10); 
    //  console.log(contador)

    //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    /*for es el ciclo que mas se usa 
    Crea un bucle que consiste en tres expresiones opcionales, encerradas en paréntesis y separadas por puntos y comas, seguidas de una sentencia ejecutada en un bucle.

    Sintaxis
    for ([expresion-inicial]; [condicion]; [expresion-final])sentencia */

     for (let i = 0; i < 10; i++) {
      console.log("for " + i);
    }
    
    let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    for (let i = 0; i < numeros.length; i++) { //numeros.length es igual a la cantidad de elementos dento del arreglo en este caso el arreglo numeros tiene 10 elementos 
      console.log(numeros[i]);// como ya lo sabemos podemos acceder a los elemntos de un arreglo y en este caso i = 0 = [10] y como i va incrementando permite ir recorriendo el arreglo numeros
    }

    /*for in 
    es un loop que permite recorrer las propiedades de un objeto
    es un for especial para un objeto*/

    const abi = {
      nombre: "abi",
      apellido: "guerra",
      edad: 18
    }
    for (const propiedad in abi) {
      console.log(` ${propiedad}: ${abi[propiedad]}`);
    }

    /*for of
    permite recorrer todos los elementos de cualquier objeto iterable(repetible)*/

    let texto = "Hola Mundo";
    for (const letras of texto) {
      console.log(letras);
    } 