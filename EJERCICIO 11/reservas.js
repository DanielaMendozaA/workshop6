import {generarReserva} from './app.js'
import {verReservasActuales} from './app.js'
import {cancelarReserva} from './app.js'
import {editarReserva} from './app.js'


const url = "data.json"

function cargarDatos(){

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            fetch(url)
            .then((result)=>{
                if(!result.ok){
                    throw new Error ("Los datos no se cargaron")
                }
                return result.json()
            })
            .then((datos) => {
                console.log("Habitaciones: ", datos.rooms)
                console.log("Tipos de habitaciones: ", datos.roomTypes);
                resolve(datos)
            })
            .catch((error) => {
                console.error(error)
                reject(error)
            })
        },3000)

    })
}

const simularWhile = async function(){
    const {rooms,roomTypes} = await cargarDatos()
        let opcion = Number(prompt("Ingrese el número de la opción correspondiente a la accion que desea realizar" + 
                                        "\n1.Realiza reserva" + 
                                        "\n2.Ver reservas" +
                                        "\n3.Cancelar reserva" + 
                                        "\n4.Editar reservas" +
                                        "\n5.Salir"))                    
        switch(opcion){
            case 1:
                alert("Generar reserva")
                generarReserva(rooms,roomTypes)
                simularWhile()
                break
            case 2:
                alert("Ver reservas")
                verReservasActuales()
                simularWhile()
                break
            case 3:
                alert("Cancelar reservas")
                verReservasActuales()
                cancelarReserva()
                simularWhile()
                break
            case 4:
                alert("Editar reservas")
                verReservasActuales()
                editarReserva()
                simularWhile()
                break
            case 5:
                alert("Gracias por usar nuestro sistema")
                break
            default:
                alert("El número ingresado es inválido")
                simularWhile()
                
        }//Cierre switch
}//Cierre funcion

simularWhile()





