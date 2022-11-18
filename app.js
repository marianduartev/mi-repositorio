// Variables 
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaExtenciones = document.querySelector('#lista-extencion');
let articulosCarrito = [];
let nombre = (prompt ('Ingrese su nombre'));
let apellido = (prompt ('Ingrese su apellido'))


cargarEventListener();
function cargarEventListener(){
    // Cuando agregas un curso presionando "Agregar al Carrito"
    listaExtenciones.addEventListener('click', agregarExtenciones);
    // Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso)

    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; // Reseteamos el arreglo

        limpiarHTML(); // Eliminamos todo el HTML
})

}


//Funcion Alert
class persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
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
 

// Funciones
function agregarExtenciones(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const extencionSeleccionada = e.target.parentElement.parentElement;
        leerDatosExtencion(extencionSeleccionada);
    }
}

// Elimina un curso del carrito
function eliminarCurso(e) {
    if(e.target.classList.contains('borrar-extencion')){
        const extencionId = e.target.getAttribute('data-id');

        // Elimna del arreglo de ariticulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(extencion => extencion.id !== extencionId)

        carritoHTML(); // Iterar sobre el carrito y mostrar su HTML
    }
}

// Lee el contenido del HTML al que le dimos click y extrae la información del curso
function leerDatosExtencion(extencion){
    //console.log(extencion);


    // Crear un objeto con el contenido del cruso actual
    const infoextencion = {
        imagen: extencion.querySelector('img').src,
        titulo: extencion.querySelector('strong').textContent,
        precio: extencion.querySelector('.precios').textContent,
        id: extencion.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( extencion => extencion.id === infoextencion.id);
    if(existe){

        //Actualizamos la cantidad
        const extenciones = articulosCarrito.map( extencion => {
            if(extencion.id === infoextencion.id){
                extencion.cantidad++;
                return extencion; // Retorna el objeto actualizado
            } else{ 
                return extencion; // Retorna los objetos que no son los duplicados
            }
        });    
        } else {
            // Agrega elemento al arreglo de carrito
            articulosCarrito = [...articulosCarrito, infoextencion];
        }

        console.log(articulosCarrito);

        carritoHTML();
}


// Muestra el carrito de compras en el HTML
function carritoHTML(){

    // Limpiar el HTML
    limpiarHTML();

    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach( curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
               <img src="${imagen}" width="100">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-extencion" data-id="${id}"> X </a>
            </td>
        `;

        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })
}


// Elimina los cursos del tbody
function limpiarHTML(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

// Local Storage
localStorage.setItem("imagen", "imagen");
localStorage.setItem("titulo", "titulo");
localStorage.setItem("precio","precio");
localStorage.setItem("id","id");
localStorage.setItem("cantidad", "cantidad");