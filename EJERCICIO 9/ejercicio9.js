let div = document.getElementById("contenedor")
div.style.color = 'rgb(97, 17, 11)'
div.style.backgroundColor = 'rgba(24, 23, 23,0.6)'
div.style.textAlign = 'center'


let tiempo = Number(prompt("Ingrese el tiempo en segundos"))
let milisegundos = tiempo * 1000

const url = "https://jsonplaceholder.typicode.com/posts"
const promesa = new Promise((resolve, reject) =>{

    setTimeout(() => {
        fetch(url)
        .then((respuesta) => {
            
            resolve(alert("Hola desde set time out") + respuesta)

            return respuesta.json()

        })
        .then((data) => {
           console.table(data)
           str = ""
           data.forEach(element => {
            str += JSON.stringify(element) + "\n"
            div.innerText = str
           })
        })
    }, milisegundos)

})



