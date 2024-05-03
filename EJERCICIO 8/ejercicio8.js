function fabricaContador() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    }
}
let contadores = []
let contador = fabricaContador()
while(confirm("¿Quieres agregar un numero?")){
    contadores.push(contador())

}

console.log(contadores);
