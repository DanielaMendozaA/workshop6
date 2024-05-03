console.log(
    "Intentando llamar a 'funcionDeclarada' antes de su declaración:"
  );
  try {
    console.log(funcionDeclarada());
  } catch (error) {
    console.log("Error:", error.message);
  }
  
  console.log(
    "Intentando llamar a 'funcionExpresada' antes de su declaración:"
  );
  try {
    console.log(funcionExpresada());
  } catch (error) {
    console.log("Mensaje del error:", error.message);
    console.log("Nombre del error:", error.nombre);
    console.log("Rastro de la pila:", error.stack);
  }
  
  try {
    console.log(funcionExpresada());
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log("¡Oops! Parece que intentaste usar una función o variable que no está definida.");
        } else {
            console.log("Ocurrió un error:", error.message);
        }
    }

  // Declaración de una función declarada
  function funcionDeclarada() {
    return "Función declarada ha sido llamada.";
  }
  
  // Declaración de una función expresada
  const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
  };
  
  console.log("Llamando a 'funcionDeclarada' después de su declaración:");
  console.log(funcionDeclarada());
  
  console.log("Llamando a 'funcionExpresada' después de su declaración:");
  console.log(funcionExpresada());

  //¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?
  /*Función declarada: Esta función se puede llamar incluso antes de su declaración, esto es porque este tipo de funciones js las iza o las pone al principio al momento de que se ejecuta el script, es importante tener en cuenta que no es una buena práctica ya que se puede volver ilegible en una aplicación muy extensa, es mejor mantener un orden en nuestro código
  Función expresada: Este tipo de funciones al igual que las arrow funtion deben ser primero inicializadas antes de llamarlas, pues no se izan cuando se ejecuta el script como lo hacen las funciones declaradas, es una buena práctica utilizarlas para obligarnos a tener un orden en nuestro código, por eso es que cuando tratamos de ejecutarla antes de inicializarla, nos arroja el catch.*/

  //¿Cómo difieren los resultados entre la función declarada y la función expresada?
  /*Difieren porque la función declarada se iza al momento de ejecutar el script, a diferencia de la expresada que no tiene este mismo comportamiento, por lo tanto al tratar de acceder a ella antes de su inicialización nos arroja un error.*/