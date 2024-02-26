

//Definir los productos


function Producto(nombre,stock,precio){
    this.nombre = nombre;
    this.stock = stock;
    this.precio = parseFloat(precio)
;}

const productos = [
{ nombre: 'pasta', precio: 20 },
{ nombre: 'canelones', precio: 30 },
{ nombre: 'raviolis', precio: 50 },
{ nombre: 'sopamiso', precio: 15}
];

const carrito = [];


// Función para mostrar los productos disponibles al cliente
function mostrarProductos(arr){
    let mensaje =  'Productos disponibles:\n'
    arr.forEach((el)=> mensaje += el.nombre +' '+ el.precio +'€'+'\n' )
    alert(mensaje)
}


// Función para permitir elegir los productos 
function elegirProductos(arr){
    for (let i = 0 ; i < 3 ; i--){
        let opciones = arr.map((el)=>`${el.nombre} ${el.precio}€`);
        let opcion = prompt('Elije un producto:\n' + opciones.join('\n'));
        let productoElegido = arr.find(el => el.nombre == opcion.split('-')[0]);
        if(productoElegido){
            return productoElegido;
        }else{
            alert('No hemos encontrado ese producto, inténtalo otra vez.');
        }
    }
    alert('Uy, algo no ha ido bien, inténtalo de nuevo más tarde.')
    return null;
}

//Función para comprar productos.
function comprarProductos(arr){
    let continuarComprando = true;
    while(continuarComprando){
        let productoElegido = elegirProductos(arr);
        let cantidad = parseInt(prompt('¿Cuántos '+ productoElegido.nombre + ' quieres llevarte?'));

        agregarAlCarrito(productoElegido,cantidad);

        let respuesta = prompt('¿Quieres seguir comprando? (s/n)');
        if(!respuesta || respuesta.toLowerCase() !== 's'){
            continuarComprando = false;
        }
    }
}

// Función para agregar un producto al carrito
function agregarAlCarrito(el,cantidad){
    if(!isNaN(cantidad)){
        carrito.push({nombre: el.nombre, precio: el.precio, cantidad: cantidad});
    alert ('se han añadido ' + cantidad +' '+ el.nombre + ' al carrito.');
    }else{
        alert('La cantidad de productos no es válido. Inténtalo otra vez.')
    } 
}


// Función para calcular el precio total del carrito con IVA
function calcularPrecioTotalConIVA(arr){
    const IVA = 0.21
    let subtotal = arr.reduce((total,el) => total + (el.precio * el.cantidad), 0);
    let totalConIVA = subtotal.toFixed(2) *(1 + IVA)
    return totalConIVA.toFixed(2);
}

// Función para mostrar el contenido del carrito
function mostrarCarrito(arr){
    let mensaje = 'Este es tu carrito:\n';
    arr.forEach((el) => mensaje += '-' + el.nombre + ' x ' + el.cantidad + ' unidades: ' + (el.precio * el.cantidad) +' €' + '\n');
    mensaje += 'El total sin IVA es: '+ arr.reduce((total, el) => total + (el.precio * el.cantidad), 0 ) +' €'+'\n';
    mensaje += 'El total con IVA (21%) es: ' + calcularPrecioTotalConIVA(arr)+' €';
    alert(mensaje);
}

// Función para calcular el total con intereses en caso de financiación
function calcularTotalConInteres(arr, meses) {
    const interesMensual = 0.02; // 2% de interés mensual
    let totalConIVA = calcularPrecioTotalConIVA(arr);
    let totalConInteres = totalConIVA * (1 + interesMensual * meses);
    return totalConInteres;
}

//Función para procesar el pago con dos opciones , tarjeta o financiación.
function procesarPago(arr){
    for (let i = 0; i < 3; i++){
    let metodoPago = prompt('Elije cómo quieres pagar: \n tarjeta \nfinanciacion')
    switch(metodoPago){
    case 'tarjeta': 
        let totalConIVA = calcularPrecioTotalConIVA(arr);
        alert('Hemos hecho un cargo de '+ totalConIVA + ' €' + ' a tu cuenta.\n ¡Gracias por comprar con nosotros!')
        return;
    
    case 'financiacion':
        let meses = parseInt(prompt('¿En cuantos meses quieres financiar tu compra?'));
        if(!isNaN(meses) && meses > 0){
            let totalConIntereses = calcularTotalConInteres(arr,meses);
            alert('Has elegido financiar tu compra en '+ meses + ' meses. \n El total a pagar con intereses es: '+ totalConIntereses.toFixed(2)+' €');
            alert('¡Gracias por comprar con nosotros!')
            return;
        }else{
            alert('Algo no ha ido bien, introduce correctamente el número de meses.')
        }
        break;
    default:
        alert('Ups, algo no ha ido bien, inténtalo de nuevo.')
        }
    }
    alert('Has pasado el numero de intentos disponible. Intentalo más tarde.')
}



mostrarProductos(productos);
comprarProductos(productos);
mostrarCarrito(carrito);
calcularTotalConInteres(carrito);
procesarPago(carrito);
