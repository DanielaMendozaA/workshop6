let butom = document.getElementById("boton")

const main = function(){
  
  alert("¡¡BIENVENIDO AL CONTEXTO GLOBAL!!")
  alert("Vamos a validar si tienes claros los conceptos del alcance de una variable global, observa el codigo en pantalla y resuelve las preguntas")

  let isGlobalVariable = confirm(`¿Es posible acceder a la variable globalVariable desde este contexto?`)
  let isfunctionVariable = confirm(`¿Es porsible acceder a la variable functionVariable desde este contexto?`)
  let isblockVariable = confirm("¿Es posible acceder a la variable blockVariable desde este contexto?")

  const errorGlobal = []

  const errorGlobalVariable = "ERROR VARIABLE GLOBAL \nEs posible acceder a esta variable desde cualquier contexto del programa, debido a que es una variable global"
  const errorFuntionVariable = "ERROR VARIABLE DE FUNCION\nSolo se puede acceder a esta variable desde los contextos de la funcion testScope, incluyendo sus bloques y funciones internas"
  const errorBlockVariable = "ERROR VARIABLE DE BLOQUE\nSolo es posible acceder a esta variable desde el bloque interno (if) de la funcion testScope, ya que se encuentra en el ambito mas interno de este programa"

  let gValGlobal = (!isGlobalVariable) ? errorGlobal.push (errorGlobalVariable) : null
  let gFunVar = (isfunctionVariable) ? errorGlobal.push (errorFuntionVariable)  : null
  let gBlockVar = (isblockVariable) ? errorGlobal.push (errorBlockVariable) : null

  if(gValGlobal === null && gFunVar === null && gBlockVar === null){
    alert("Genial, tienes claros los conceptos de variable global")
  }else{
    let str = ""
    errorGlobal.forEach(error => {str += error + "\n"})
    alert(str)
  }

  alert("¡¡BIENVENIDO AL CONTEXTO DE LA FUNCION!!")
  alert("Vamos a ver si tienes claro los alcances de las variables dentro de una funcion")

    let isGlobalVariableF = confirm(`¿Es posible acceder a la variable globalVariable desde este contexto?`);
    let isfunctionVariableF = confirm(`¿Es porsible acceder a la variable functionVariable desde este contexto?`)
    let isblockVariableF = confirm("¿Es posible acceder a la variable blockVariable desde este contexto?")

    const errorFuntion = []

    let fValGlobal = (!isGlobalVariableF) ? errorFuntion.push (errorGlobalVariable) : null
    let fFunVar = (!isfunctionVariableF) ? errorFuntion.push (errorFuntionVariable)  : null
    let fBlockVar = (isblockVariableF) ? errorFuntion.push (errorBlockVariable) : null

    if(fValGlobal === null && fFunVar === null && fBlockVar === null){
      alert("Genial, tienes claros los conceptos del alcance de la funcion")
    }else{
      let str = ""
      errorFuntion.forEach(error => {str += error + "\n"})
      alert(str)
    }

    alert("¡¡BIENVENIDO AL CONTEXTO DE BLOQUE DENTRO DE UNA FUNCION!!")
    alert("Vamos a ver si tienes claro los alcances de las variables dentro del bloque")

    let isGlobalVariableb = confirm(`¿Es posible acceder a la variable globalVariable desde este contexto?`);
    let isfunctionVariableB = confirm(`¿Es porsible acceder a la variable functionVariable desde este contexto?`)
    let isblockVariableB = confirm("¿Es posible acceder a la variable blockVariable desde este contexto?")

    const errorBloque = []

    let bValGlobal = (!isGlobalVariableb) ? errorBloque.push (errorGlobalVariable) : null
    let bFunVar = (!isfunctionVariableB) ? errorBloque.push (errorFuntionVariable)  : null
    let bBlockVar = (!isblockVariableB) ? errorBloque.push (errorBlockVariable) : null

    if(bValGlobal === null && bFunVar === null && bBlockVar === null){
        alert("Genial, tienes claros los conceptos del alcance de bloque interno")
    }else{
        let str = ""
        errorBloque.forEach(error => {str += error + "\n"})
        alert(str)
    }


}

butom.addEventListener("click" , main)




