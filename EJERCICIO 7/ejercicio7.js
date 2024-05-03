const switchErrores = function(valor){
  switch(valor){
      case "1":
          return "La respuesta 1 es incorrecta. \nLa respuesta correcta es 1, ya que esta primera linea es sincrona y recuerda que siempre se ejecuta lo que es sincrono en forma de cascada"
      case "2":
          return "La respuesta 2 es incorrecta. \nLa respuesta correcta es 5, ya que es la siguiente linea sincrona y recuerda que siempre se ejecuta lo que es sincrono en forma de cascada"
      case "3":
          return "La respuesta 3 es incorrecta. \nLa respuesta correcta es 4, ya que la promesa es asincrona pero es una microtarea, recuerda que primero se ejecutan las microtareas y luego las macrotareas"
      case "4":
          return "La respuesta 4 es incorrecta. \nLa respuesta correcta es 2, ya que es la primera macrotarea que se encuentra en el código"
      case "5":
          return "La respuesta 5 es incorrecta. \nLa respuesta correcta es 3, ya que es la ultima macrotarea que se encuentra en el código"

  }
}


const ordenCorrecto = ["1","5","4","2","3"]
const divs = document.querySelectorAll('.padre-1 div')
const arrayDivs = []

divs.forEach((div) =>{
  div.addEventListener("click", () =>{
    if(!arrayDivs.includes(div.textContent)){
      arrayDivs.push(div.textContent)
      div.style.pointerEvents = 'none'
      div.style.backgroundColor = 'red'
      
    }
  })
  
})

const arrayCompleto = function() {
  let errores = []; // Asegúrate de que la variable errores esté definida dentro de la función
  strRespuestas = ""
  arrayDivs.forEach(div => strRespuestas += div + "\n")
  alert(`Tus respuestas fueron: \n${strRespuestas}`)
  if (arrayDivs.length === 5) {
    for (let i = 0; i < 5; i++) {
      if (ordenCorrecto[i] !== arrayDivs[i]) {
        errores.push(arrayDivs[i]);
      }
    }

    if (errores.length > 0) {
      errores.sort((a, b) => a - b)
      let mensaje = "Se encontraron errores en las siguientes respuestas:\n";
      for (let error of errores) {
        let str = switchErrores(error);
        mensaje += str + "\n";
      }
      alert(mensaje);
    } else {
      alert("Genial, tienes claros los conceptos");
    }
  }
};
