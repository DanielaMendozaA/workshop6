function manejarAsincronia (promesa, callBack) {

    promesa.then(resultado => {
        alert("El resultado de la promesa es: " + resultado)
        callBack(null,resultado)

    }).catch(error => {
        alert("Hubo un error en la promesa")
        callBack(error)

    })

}

let callBack = function (error, exito) {
    if(error){

        alert("El error que hubo es: " + error)

    }else{

        alert("La promesa se ha resuelto con exito y el callback se ha ejecutado con el resultado: " + exito)
    }
}

let promesa = new Promise ((resolve, reject) => {
    let num = Number(prompt ("Ingresa un numero aleatorio"))

    if(num < 10){
        reject(new Error("El numero es menor que 10"))

    }

    setTimeout(() => {
        resolve("Hola desde setTimeOut")

    }, 0)
})

manejarAsincronia(promesa, callBack)

let promesa2 = new Promise((resolve, reject) => {
    resolve("Hola desde la promesa 2")

})


promesa2.then((resultado) =>{
    alert("El resultado es " + resultado)
})

