console.log
let nombreUsuario = (prompt ('ingrese su nombre'));
let apellidoUsuario = (prompt ('ingrese su apellido'));

alert ('Hola ' + nombreUsuario + ' ' + apellidoUsuario);
console.log

let producto = (prompt ('Ingrese la técnica de extensiones deseada'));
alert ('Usted seleccionó la técnica ' + ' ' + producto);

console.log


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

 for (let i = 1; i <= 4; i++) {
    let ingresarNombre = (prompt ('Ingrese su nombre completo'));
    alert ('Turno N°' +i+' Nombre:'+' '+ingresarNombre);
    if (i => 5) {
        break; 
    }
    alert (i);
 }

 console.log