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
        if(pisoActual<destino){
            if(destino>pisoActual){
                while(pisoActual != destino){
                    subir();
                }
            }
        } else if (pisoActual > destino) {
            while(pisoActual != destino){
                bajar();
            }
        }
        abrir();
    }

    function display(){
        return `Estas en ${pisoActual} / ${pisosTotales}, la puerta esta ${estadoPuerta?"Abierta":"Cerrada"}`
    }

    return {mover:irAPiso,abrirPuerta: abrir,cerrarPuerta:cerrar, estado:display}
            
})(8)

Elevador.mover(6)
console.log(Elevador.estado())
Elevador.mover(2)
console.log(Elevador.estado())
Elevador.mover(8)
console.log(Elevador.estado())
Elevador.mover(1)
console.log(Elevador.estado())
