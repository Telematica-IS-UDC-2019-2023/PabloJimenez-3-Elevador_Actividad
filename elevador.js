let Elevador = (function(pisosT){
    pisosTotales=pisosT
    pisoActual=1;
    estadoPuerta=false;

    function subir(){
        if(pisoActual < pisosTotales && !estadoPuerta){
            pisoActual++;
        }
    }

    function bajar(){
        if(!estadoPuerta && pisoActual>0){
            pisoActual--;
        }
    }

    function abrir(){
        if(!estadoPuerta){
            estadoPuerta = true;
        }
    }

    function cerrar(){
        if(estadoPuerta){
            estadoPuerta = false;
        }
    }

    function irAPiso(destino){
        cerrar();
        if(pisoActual<destino && destino <= pisosT){
            while(pisoActual != destino){
                subir();
            }  
        } else if (pisoActual > destino && destino >= 1) {
            while(pisoActual != destino){
                bajar();
            }
        } else {
            console.log('No tenemos ese piso, ingrese un piso válido')
        }
        abrir();
        
    }

    function display(){
        return `Estas en ${pisoActual} / ${pisosTotales}, la puerta esta ${estadoPuerta?"Abierta":"Cerrada"}`
    }

    return {mover:irAPiso,abrirPuerta: abrir,cerrarPuerta:cerrar, estado:display}
            
})(8)

console.log('------Moverse entre pisos--------')
Elevador.mover(6)
console.log(Elevador.estado())
Elevador.mover(2)
console.log(Elevador.estado())
Elevador.mover(8)
console.log(Elevador.estado())
Elevador.mover(9)
console.log('---------Abrir y Cerrar Puertas----------')
Elevador.abrirPuerta()
console.log(Elevador.estado())
Elevador.cerrarPuerta()
console.log(Elevador.estado())




