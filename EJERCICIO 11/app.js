let reservasDB = []
const valNumHuesped = function(value){
    let regex = /^[1-6]+$/;
    return regex.test(value)
}

const whileValHuesped = function(value){
    while(!valNumHuesped(value)){
        alert("Solo tenemos disponibles habitaciones desde 1 hasta 6 personas")
        value = prompt("Ingrese el número de personas que se van a alojar de nuevo")
    }
    return value
}

const whileIdHabitaciones = function(habConCapacity,rooms){
    let idHabitaciones = Number(prompt("Ingresa el numero del id de la habitación que quieres reservar"))
    let habValida = habConCapacity.find(room => room.id === idHabitaciones)
    while(!habValida){
        idHabitaciones = Number(prompt("Ingrese un numero de id valido"))
        habValida = habConCapacity.find(room => room.id === idHabitaciones)
    }
    const habitacionesID = rooms.filter(room => room.roomTypeId === idHabitaciones && room.availability == true)
    return {idHabitaciones,habitacionesID}
}

const validarNumeroDispo = function(num, numDisponible){
    return numDisponible.includes(num)
}

const whileNumHabitacion = function(num, numDisponible){ 
    while(!validarNumeroDispo(num,numDisponible)){
        alert("Ingresa un numero de habitación valido")
        num = Number(prompt("Ingresa el numero de la habitación de nuevo"))
    }
    return num
}

const validarNombre = function(nombre){
    let regexNombre = /^[a-zA-Z]+\s[a-zA-Z]+$/;
    return regexNombre.test(nombre)
}

const whileNombre = function(nombre){
    while(!validarNombre(nombre)){
        alert("Debes ingresar unicamente tu primer nombre y tu primer apellido")
        nombre = prompt("Ingresa tu nombre y tu apellido nuevamente")
    }
    return nombre

}

const validarFecha = function(date){
    let regexFecha = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/
    return regexFecha.test(date)
}

const obtenerFecha = function(mensaje){
    let fecha = prompt(mensaje)
    while(!validarFecha(fecha)){
        fecha = prompt(`Fecha inválida \n${mensaje}`)
    }
    return new Date(fecha.split("/").reverse().join("-"))
}

const obtenerDiasFechas = function(fechaInicio, fechaFin){
    const unDia = 1000 * 60 * 60 * 24 //contar milisegundos de un dia
    const diferenciaEnMilis = fechaFin.getTime() - fechaInicio.getTime()
    return Math.round(diferenciaEnMilis / unDia)
}

const validarFechasDisponibles = function(array, numeroHabitacion, fechaInicio, fechaFin){
    return array.some((reserva) => {
        return reserva.numeroHabitacion == numeroHabitacion && ((fechaInicio >= reserva.fechaInicio && fechaInicio <= reserva.fechaFin) || 
             (fechaFin >= reserva.fechaInicio && fechaFin <= reserva.fechaFin))
             })

}

const agregarReserva = function(idDeReserva,nombreTitular,numeroHuespedes,fechaInicio,fechaFin,numeroHabitacion,precioNoche,cantidadDias, precioTotal,tipoHabitacion,descripcionHabitacion,capacidad){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(validarFechasDisponibles(reservasDB,numeroHabitacion,fechaInicio,fechaFin)) reject("No hay disponibilidad para esas fechas")            
            else{
                const reserva = {
                    idDeReserva,
                    nombreTitular,
                    numeroHuespedes,
                    fechaInicio,
                    fechaFin,
                    numeroHabitacion,
                    precioNoche,
                    cantidadDias,
                    precioTotal,
                    tipoHabitacion,
                    descripcionHabitacion,
                    capacidad,
                    // toString: function(){
                    //     return JSON.stringify(this)
                    // }
                }
                reservasDB.push(reserva)
                resolve("¡¡Su reserva se ha generado con exito!!" + JSON.stringify(reserva,null,2))
                // resolve(`Su reserva es: \n ${reserva.toString()}`)
            }
        }, 3000)
    })
}

const GenerarIdReserva  = function(){
    let contId = 0
    return function(){
        contId ++
        return contId
    }
}

let idReserva = GenerarIdReserva()

export const generarReserva = function(rooms, roomTypes){
    let numHuespedes = prompt("Ingrese el número de personas que se van a alojar")
    numHuespedes = whileValHuesped(numHuespedes) 

    let habConCapacity = roomTypes.filter(roomTypes => roomTypes.capacity >= numHuespedes)
    let str = ""
    habConCapacity.forEach(hab => str += JSON.stringify(hab) + "\n")
    alert(`Los tipos de habitaciones disponibles son:\n${str}`)

    let resultado = whileIdHabitaciones(habConCapacity,rooms)
    let idHabitaciones = resultado.idHabitaciones
    let habitacionesID = resultado.habitacionesID

    let str2 = ""
    habitacionesID.forEach(hab => str2 += JSON.stringify(hab) + "\n")
    alert(`Las habitaciones disponibles para el id seleccionado son: \n${str2}`)

    let seleccionHab = Number(prompt("Ingrese el numero de habitación seleccionado"))
    let numDisponible = habitacionesID.map(hab => hab.number)

    seleccionHab = whileNumHabitacion(seleccionHab,numDisponible)

    let precioNoche
    rooms.forEach((room)=>{
        if(room.number == seleccionHab){
            precioNoche = room.priceNight
        }
    })

    let tipoHabitacion
    roomTypes.forEach((room) => {
        if(room.id === idHabitaciones){   
            tipoHabitacion = room.name

        }
    })

    alert(tipoHabitacion)

    let descripcionHabitacion
    roomTypes.forEach((room) => {
        if(room.id === idHabitaciones){
            descripcionHabitacion = room.description
        }
    })

    alert(descripcionHabitacion)

    let capacidadHabitacion
    roomTypes.forEach((room) => {
        if(room.id === idHabitaciones){
            capacidadHabitacion = room.capacity
        }
    })

    let nombreUsuario = prompt("Ingrese el nombre del titular de la reserva")
    nombreUsuario = whileNombre(nombreUsuario)
    nombreUsuario = nombreUsuario.toLowerCase()

    let fechaInicio = obtenerFecha("Ingrese la fecha de inicio")
    let fechaFin = obtenerFecha("Ingrese la fecha fin")
    while(fechaInicio > fechaFin){
        fechaFin = obtenerFecha("La fecha fin no puede ser menor que la fecha de inicio. Ingrese la fecha nuevamente")
    }

    let diasDifereencia = obtenerDiasFechas(fechaInicio,fechaFin)

    let precioTotal = precioNoche * diasDifereencia

    let newId = idReserva()

    agregarReserva(newId,nombreUsuario,numHuespedes,fechaInicio,fechaFin,seleccionHab, precioNoche, diasDifereencia, precioTotal, tipoHabitacion,descripcionHabitacion,capacidadHabitacion)
    .then((respuesta) => {
        alert(respuesta)
    })
    .catch((error) =>{
        alert(error)
    })

    console.log(reservasDB)

}


export const verReservasActuales = function(){
    let nombreBuscado = prompt("Ingrese el nombre del titular de la reserva que desea buscar")
    nombreBuscado = nombreBuscado.toLowerCase()

    let encontrarNombre = reservasDB.filter((reservas) => {
        return reservas.nombreTitular === nombreBuscado
    } )

    if(encontrarNombre.length === 0){
        alert("No se encontraron reservas con el nombre indicado")
    }else{
        let str = ""
        encontrarNombre.forEach(encontrado => str += JSON.stringify(encontrado) + "\n")
        alert(str)
    }

}

export const cancelarReserva = function(){
    let idACancelar = Number(prompt("Ingrese el numero de id de la reserva que desea cancelar"))
    let idEncontrado = reservasDB.find(reserva => reserva.idDeReserva === idACancelar)
    if(!idEncontrado){
        alert("No se encontraron reservas con el id ingresado")
    }else{
        reservasDB = reservasDB.filter(reservas => reservas.idDeReserva !== idEncontrado.idDeReserva)
        alert("Se ha eliminado la reserva con exito")
    }
}

export const editarReserva = function(){
    let idAEditar = Number(prompt("Ingrese el id de la reserva que desea editar"))
    let idEncontrado = reservasDB.find(reserva => reserva.idDeReserva === idAEditar)
    if(!idEncontrado){
        alert("No se encontraron reservas con el id ingresado")
    }else{
        let nuevaFechaInicio = obtenerFecha("Ingrese la nueva fecha de inicio") 
        let nuevaFechaFin = obtenerFecha("Ingrese la nueva fecha fin")
        while(nuevaFechaFin < nuevaFechaInicio){
            nuevaFechaFin = obtenerFecha("La nueva fecha final no debe ser menor que la fecha de inicio, ingrese la fecha fin de nuevo")
        }
        let generarReserva = true
        reservasDB.forEach((reserva) => {
            if(reserva.idDeReserva !== idAEditar && ((nuevaFechaInicio >= reserva.fechaInicio && nuevaFechaInicio <= reserva.fechaFin) || 
            (nuevaFechaFin >= reserva.fechaInicio && nuevaFechaFin <= reserva.fechaFin))){
                generarReserva = false
            }
            if(generarReserva){
                reserva.fechaInicio = nuevaFechaInicio
                reserva.fechaFin = nuevaFechaFin
                alert("Su nueva reserva es: \n" + JSON.stringify(reserva, null, 2))
            }else{
                alert("No hay disponibilidad en esa habitación para las fechas seleccionadas")
            }

        })
      
    }
}
