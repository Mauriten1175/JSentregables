function nombreCliente (){
    alert ('Sistema de caja');
    let nombre = prompt ('Ingrese el nombre de cliente: ');
    while (nombre === '') {
        nombre = prompt ('Ingrese el nombre de cliente: ');
    }
    return nombre;
}


function categoria(){
    let cat;
    do {
        cat = parseInt(prompt ('Ingrese el número de categoria del cliente: \n1-Bronce (10%)\n2-Plata (15%)\n3-Oro (20%)\n4-Diamante (30%)'));

    } while (cat < 1 || cat > 4)
    return cat;

}


function descuento (){
    let monto = parseInt(prompt('Ingrese el monto de la compra: '));
    let desc;
    let montoFinal;
    if (numCat == 1){
        desc = monto*0.1;
        montoFinal = monto - desc;
        alert (' Monto ingresado : $' + monto + '\n Descuento aplicado: $' + desc + '\n Precio final: $'+montoFinal);
        
    }else if(numCat == 2){
            desc = monto*0.15;
            montoFinal = monto - desc;
            alert (' Monto ingresado : $' + monto + '\n Descuento aplicado: $' + desc + '\n Precio final: $'+montoFinal);
    }else if(numCat == 3){
            desc = monto*0.20;
            montoFinal = monto - desc;
            alert (' Monto ingresado : $' + monto + '\n Descuento aplicado: $' + desc + '\n Precio final: $'+montoFinal);
    }else{
        desc = monto*0.30;
        montoFinal = monto - desc;
        alert (' Monto ingresado : $' + monto + '\n Descuento aplicado: $' + desc + '\n Precio final: $'+montoFinal);
    }
    return montoFinal;

}

function cobro(monto){
    let efectivo = parseInt(prompt('Ingrese el monto con el que abonará: $'));
    if (efectivo > monto){
        let vuelto = efectivo-monto;
        alert('El vuelto es: $'+ vuelto + '\n Gracias ' + nombreCli + ' por su compra ✔');
    }else if (efectivo < monto) {
        alert ('Dinero insuficiente ❌');
    }else{
        alert('Gracias ' + nombreCli + ' por su compra ✔');
    }

}


let nombreCli = nombreCliente();
let numCat = categoria();
let mFinal = descuento();
cobro (mFinal);
