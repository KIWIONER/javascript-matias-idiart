//CARRITO DE COMPRAS.

// 1-COMPROBAR QUE LAS CREDENCIALES DEL CLIENTE SEAN CORRECTAS
// 2-DAR ACCESO AL MENU PARA ELEGIR LA INTERACCION QUE QUIERE HACER CON LA APLICACIÓN.
// 3- ELEGIR UN PRODUCTO DEL MENU
// 4-AVERGIUAR CUANTAS UNIDADES QUIERE COMPRAR.
// 5- MOSTRARLE LA CANTIDAD QUE PAGARÁ AL COMPRAR EL PRODUCTO.
// 6- AGREGAR EL IVA AL PRODUCTO QUE QUIERE COMPRAR
// 7-OFRECERLE DOS METODOS DE PAGO: I-PAGO CON TARJETA II-FINANCIAR LA COMPRA
// 8- SABER EN CUANTOS MESES QUIERE HACER EL PAGO Y MOSTRARLE LA CANTIDAD MENSUAL QUE PAGARÁ
// 9-MOSTRARLE LA CANTIDAD TOTAL A PAGAR CON INTERESES.


// 1-COMPROBAR QUE LAS CREDENCIALES DEL CLIENTE SEAN CORRECTAS
let nombre = 'matias';
let password = '2292'
let acceso = false;

//declaro una funcion anonima para albergar el algoritmo de credenciales.
const credenciales = (nombre, password)=>{
    for(let i=3; i>=0; i--){
        let confirmarNombre = prompt('Confirma tu nombre');
        let confirmarPassword = prompt('Confirma tu contraseña')
        if((nombre === confirmarNombre) && (password === confirmarPassword)){
            alert('Bienvenido a tu cuenta '+ nombre );
            acceso = true;
            break;
        }else{
            alert('algo ha salido mal, vuelve a intentarlo. te quedan '+ i +' intentos')
            }       
        }
}
credenciales(nombre, password)
/*--------------------------------------------*/

// 2-DAR ACCESO AL MENU PARA ELEGIR LA INTERACCION QUE QUIERE HACER CON LA APLICACIÓN.
if(acceso)
    {
        let cantidad;
// 3- ELEGIR UN PRODUCTO DEL MENU
        let producto = prompt ('¿Que quieres comprar? \n-1 Camisetas 15€ \n-2 Pantalones  35€\n-3 Sudaderas 40€')
        if (producto==='camisetas'|| producto==='pantalones' || producto === 'sudaderas'){
// 4-AVERGIUAR CUANTAS UNIDADES QUIERE COMPRAR.
            cantidad = prompt('¿Cuantos '+producto+' comprar?')

        function carrito (cantidad, producto) {
            for(let i=3; i>=0; i--){
                switch (producto) {
                    case 'camisetas':    
                        
                        return 15 * cantidad;
                        
                    case 'pantalones':
                        
                        return 25 * cantidad;
                    
                    case 'sudaderas':
                        
                        return 40 * cantidad;
                
                }
            }
        }
// 5- MOSTRARLE LA CANTIDAD QUE PAGARÁ AL COMPRAR EL PRODUCTO.
        let totalCompra = carrito(cantidad,producto)
        alert('el total de tu compra es de : '+parseInt(totalCompra)+' €');
// 6- AGREGAR EL IVA AL PRODUCTO QUE QUIERE COMPRAR
        const IVA = 1.21;
        alert('el total de su compra con IVA es de: '+ parseFloat(totalCompra)*IVA+' €')
    }
// Aquí no me muestra correctamente el resultado de la funcion. 
//quiero capturar el total de la compra pero que solo se muestre si ha hecho todos los pasos correcto
//pero cuando me equivoco al escribir los producto, sigue funcionando totalCompra con NaN.


            

//7-OFRECERLE DOS METODOS DE PAGO: I- PAGO CON TARJETA II- FINANCIAR LA COMPRA


// 8- SABER EN CUANTOS MESES QUIERE HACER EL PAGO Y MOSTRARLE LA CANTIDAD MENSUAL QUE PAGARÁ

// 9-MOSTRARLE LA CANTIDAD TOTAL A PAGAR CON INTERESES.


// 10-terminar el carrito.
}else{
    alert('Se cerrará el carrito')}