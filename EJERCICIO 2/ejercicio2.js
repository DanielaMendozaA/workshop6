let butom = document.getElementById("boton")

const main = function(){
    const errores = []
    const errorA = "ERROR VARIABLE A\nLa variable 'a', al ser declarada con 'var', puede ser llamada antes de su declaración, pero nos retornará un 'undefined'."
    const errorB = "ERROR VARIABLE B\nLa variable 'b', al ser declarada con 'let', no puede ser llamada antes de su declaración, por lo tanto nos retornará un error."
    const errorC = "ERROR VARIABLE C\nLa variable 'c', al ser declarada con 'const', no puede ser llamada antes de su declaración, por lo tanto nos retornará un error."
    const errorFDeclarada = "ERROR FUNCIONES DECLARADAS\nLas funciones declaradas, como 'funcionDeclarada', pueden ser llamadas antes de su inicialización."
    const errorFExpresada = "ERROR FUNCIONES EXPRESADAS\nLas funciones expresadas, como 'funcionExpresada', no pueden ser llamadas antes de su inicialización, por lo tanto nos retornará un error."
    

    alert("BIENVENIDO AL QUIZ DE HOISTING")
    alert("Vamos a predecir que resultado nos arrojara cada línea de código")

    let linea2 = confirm("¿Qué crees que arrojará la línea #2 del código? \nAceptar para undefined\nCancelar para un error")

    let linea3 = confirm("¿Qué crees que arrojará la línea #3 del código? \nAceptar para undefined\nCancelar para un error")

    let linea4 = confirm("¿Qué crees que arrojará la línea #4 del código? \nAceptar para undefined\nCancelar para un error")

    let linea7 = confirm("¿Qué crees que arrojará la línea #7 del código? \nAceptar para ejecución normal \nCancelar para un error")

    let linea8 = confirm("¿Qué crees que arrojará la línea #8 del código? \nAceptar para ejecución normal\nCancelar para un error")

    let isLinea2 = (!linea2) ? errores.push(errorA) : null
    let isLinea3 = (linea3) ? errores.push(errorB) : null
    let isLinea4 = (linea4) ? errores.push(errorC) : null
    let isLinea7 = (!linea7) ? errores.push(errorFDeclarada) : null
    let isLinea8 = (linea8) ? errores.push(errorFExpresada) : null

    if(isLinea2 == null && isLinea3 == null && isLinea4 == null && isLinea7 == null && isLinea8 == null){
        alert("¡¡Genial, tienes claro los conceptos de hoisting!!")
    }else{
        let str = ""
        errores.forEach(error => str+= JSON.stringify(error) + "\n")
        alert(str)
    }


}

butom.addEventListener("click" , main)