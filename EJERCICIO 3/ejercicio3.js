const crearSumador = function (num){
    return function (num2) {
        return num + num2
    }
}

const sumador = crearSumador(5)

const sumador3 = sumador(3)
console.log(sumador3);

const sumador10 = sumador(10)
console.log(sumador10);

const sumador20 = sumador(20)
console.log(sumador20);

const sumador100 = sumador(100)
console.log(sumador100);

//¿Cómo mantienen las funciones su acceso a variables externas después de que la función externa ha terminado de ejecutarse?
/*Debido a que las variables y funciones mas internas, tienen acceso a las variables más externas, al ejecutarlas podemos acceder desde lo más interno hasta lo más externo, y de esta forma al llamarlas desde adentro se crea su entorno de ejecución*/

//¿Cuáles son las implicaciones de memoria de mantener estos closures, especialmente si se crean muchas instancias de funciones con closures?
/*Como mencione anteriormente, al estar llamando o utilizando las variables más externas desde las variables más internas, estas pueden recordar su ambito en el que fueron creadas aunque su entorno ya haya terminado de ejecutarse, es muy importante entender y saber aplicar estos conceptos para tener buenas prácticas y evitar el uso innecesario de variables para tener un manejo optimo de la memoria */