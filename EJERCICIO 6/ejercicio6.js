alert("Iniciando el script inmediatamente")

setTimeout(()=>{

    alert("Mensaje 2: Con timeOut de 0 segundos")

},0)


setTimeout(() => {

    alert("Mensaje 3: Con timeOut de 1 segundo")

},2000)


function  ejecutarPromesa(promesa){
    promesa.then((result) =>{
        alert("El resultado es: " + result)
    })

}

let promesa = new Promise((resolve,reject) =>{
    resolve("Hola desde la promesa")

})

ejecutarPromesa(promesa)

//¿Por qué "Mensaje 2: Con timeout de 0 segundos" no se muestra inmediatamente después de "Mensaje 1: Inmediatamente", a pesar de tener un retardo de 0 segundos? - ¿Que nos dicen este comportamiento sobre el event loop, las macro y micro tareas, y la forma en que JavaScript maneja las operaciones asíncronas?
/*Es porque setTimeOut se comporta como una macrotarea, y según el event loop primero se ejecutan lo que es sincrono, luego las microtareas y por ultimo las macrotareas, esta es la razon por la cual el mensaje 2, aunque su retardo es de solo 0 segundos, se tarda un poco en ejecutarse, incluso podemos observar que aunque el mensaje 2, esta declarado antes que la promesa, se ejecuta primero la promesa, ya que esta se comporta como una microtarea y se soluciona primero que setTimeOut la cual es una macrotarea. */