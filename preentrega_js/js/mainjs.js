// preentrega:
/*
- carrito de compras:
    -registro en la página web.
    1.INICIAR SESIÓN EN LA CUENTA DE CLIENTE.
    2.ELEGIR UN PRODUCTO PARA AGREGAR EN EL CARRITO
    3.SACAR UN PRODUCTO DEL CARRITO
    4.PAGAR LOS PRODUCTOS DEL CARRITO
    5.ELEGIR METODO DE PAGO (FINANCIACIÓN O TODO JUNTO).
    */       

//declaramos variables necesarias para el funcionamiento del simulador
let nombre = 'matias';
let password = '2292'
let acceso = false;
let cantidad;
let producto;
let totalCompra;
const IVA = 1.21;
let formaDePago;
let meses;
//declaro un ciclo for para confirmar las credenciales del usuario hasta 3 intentos.
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
// si las credenciales son correctas, el usuario podrá acceder al menú de compra.
if(acceso)
    {
    producto = prompt ('¿Que quieres comprar? \n-1 Camisetas 15€ \n-2 Pantalones  35€\n-3 Sudaderas 40€')
    if (producto==='camisetas'|| producto==='pantalones' || producto === 'sudaderas'){
    cantidad = prompt('¿Cuantos '+producto+' comprar?')
//genero una función para que, cuando el usuario elija un producto, se pueda calcular el precio de la prenda por la cantidad.
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
    totalCompra = carrito(cantidad,producto)
    alert('el total de tu compra es de : '+parseInt(totalCompra)+' €');
    alert('el total de su compra con IVA es de: '+ parseFloat(totalCompra)*IVA+' €')
// vuelvo a crear un ciclo para saber cómo quiere pagar el cliente, tarjeta o financiación.
    formaDePago = prompt('¿Como quieres pagar? \n - Tarjeta \n - Fianciado \n - Presiona X para salir');
    if(formaDePago == 'tarjeta' || formaDePago =='financiado'){
            while(formaDePago !='x'){
                switch (formaDePago) {
                    case 'tarjeta':
                        alert('el total a con tarjeta es de '+ parseFloat(totalCompra)*IVA+' €')
                        alert('Gracias por comprar con nosotros.')
                    break;
                    case 'financiado':
                        meses = prompt('¿En cuantos meses quieres pagar?')
                        if(meses){
                            alert('El total a pagar  es de '+ totalCompra/meses+ ' € al mes');
                            alert('Gracias por comprar con nosotros.')
                        }else{alert('No has elegido los meses a pagar')
                        }
                        break;
                    default:
                        alert('No has elegido una forma de pago.')
                    break;
                }
                formaDePago = prompt('Todo listo\n - Presiona X para salir');
            }           
        }else{alert('No has ingresado una opción de pago,')}
    }  
}else{
    alert('Se cerrará el carrito')};
            

        
        


