console.log("Inicio del script");

// Macrotarea: setTimeout
setTimeout(() => {
  console.log("Macrotarea 1 second (setTimeout)");
}, 1000);

setTimeout(() => {
  console.log("Macrotarea 0 seconds (setTimeout)");
}, 0);

// Microtarea: Promesa
Promise.resolve()
  .then(() => {
    setTimeout(() => {
      console.log("Macrotarea (setTimeout) inside Microtarea 1");
      return "from micro 1";
    }, 0);
  })
  .then((message) => {
    console.log("Microtarea 2 (Promesa)");
  });

// Microtarea: Promesa
Promise.resolve()
  .then(() => {
    console.log("Microtarea 3 (Promesa)");
  })
  .then(() => {
    console.log("Microtarea 4 (Promesa)");
  });

console.log("Fin del script");

//¿Qué tareas se consideran macrotareas y cuáles son microtareas?
/*En el código brindado, las macrotareas son los setTimeOut, son puestas en la task queue esperando a que call stack este vacio para ejecutarse, y se ejecutan en el orden, primero en entrar es el primero en ser atendido.
En el caso de las microtareas, estas tienen su propia cola llamada microTask queue y tienen prioridad sobre las macrotareas, pero se ejecutan despues de todo lo que es sincrono dentro del script*/

//¿Cómo se relacionan las macrotareas y microtareas con el event loop?
/*El event loop, o en español ciclo de eventos, es donde internamente se organizan estas tareas (macros y micros) y se determina el orden de ejecución de las mismas, como anteriormente mencionaba dando prioridad a las microtareas sobre las macrotareas, lo que quiere decir que sin importar en que orden esten inicializadas en el archivo de script, siempre  van a pasar por el event loop para ser organizadas y ejecutadas según su prioridad*/

//¿Qué sucede cuando una microtarea genera una nueva macrotarea dentro de ella?
/*En este caso se va a enviar a taskQueue o cola de macro tareas, ya que se van a ejecutar primero las microtareas que dentro no contienen macrotareas, asi esten inicializadas despues, es decir se comporta como una macrotarea sin importar que esten dentro de una microtarea*/

//¿Cómo se manejan las promesas y los setTimeout en relación con el event loop?
/*Las promesas son tomadas como microtareas y son enviadas a la cola microTask, a no ser que dentro tengan una macrotarea como lo son los setTimeOut, ya que estos son enviados a la cola taskQueue y son las ultimas en ejecutarse, en conclusion primero se ejecuta el codigo sincrono, luego las microtareas, en este caso como las promesas y por ultimo las macrotareas como los setTimeOut y si una promesa contiene un setTimeOut se va a comportar como una macrotarea y se ejecutaran despues de las promesas que no contienen.*/