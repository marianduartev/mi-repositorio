let nombre = (prompt ('Ingrese su nombre'));
let apellido = (prompt ('Ingrese su apellido'))

function persona1 (nombre, apellido) {
   this.nombre = nombre;
   this.apellido = apellido;
}
alert ('Hola ' + nombre + ' ' + apellido);

let producto = (prompt ('Ingrese la técnica de extensiones deseada: clásica o híbrida'));
alert ('Usted seleccionó la técnica ' + ' ' + producto);


if ((producto == 'clásica') || (producto == 'clasica')) {
alert ('Usted seleccionó técnica clásica de extensiones de pestañas');

}
 else if ((producto == 'híbrida') || (producto == 'hibrida')) {
    alert ('Usted seleccionó técnica híbrida de extensiones de pestañas');
 }
 else {
   alert ('No ofrecemos esta técnica de extensiones de pestañas');
}
    

 console.log (producto)
 console.log(producto.length)
 console.log (producto.toLowerCase)

 for (let i = 1; i <= 4; i++) {
    let ingresarNombre = (prompt ('Ingrese su nombre completo'));
    alert ('Turno N°' +i+' Nombre:'+' '+ingresarNombre);
    if (i => 5) {
        break; 
    }
    alert (i);
 }
 
//Array 
 
const schedule = ["Giselle"];
schedule.push = ["Venier"];
 
console.log (schedule);
