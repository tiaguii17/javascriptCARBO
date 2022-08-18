import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

let sumatoriaMaquina = 0;
let sumatoriaJugador = 0;

let buttonPiedra = document.getElementById ("piedra");
    buttonPiedra.onclick = jugador1;
let buttonPapel = document.getElementById ("papel");
    buttonPapel.onclick = jugador1;
let buttonTijera = document.getElementById ("tijera");
    buttonTijera.onclick = jugador1;
   

function maquina() {
    let numero = Math.floor(Math.random() * 3) + 1;
     console.log(`Numero de la maquina ${numero}`);
     if(numero == 1){
        Toastify({
            text:"La Maquina escogio Piedra",
            duration: 2000
        })
     }else if(numero == 2){
        Toastify({
            text:"La Maquina escogio Papel",
            duration: 2000
        })
     }else if(numero == 3){
        Toastify({
            text:"La Maquina escogio Tijera",
            duration: 2000
        })
   }
    return numero;
}


    function jugador1 (e){
      let piedra = 1;
      let papel = 2;
      let tijera = 3;
      let aux = 0


        if(e.target.id == "piedra") {
        aux = piedra;

        switch (maquina()) {
            case 1:
                Swal.fire({
                    title: 'Empate!!!',
                    text: 'PIEDRA PAPEL 0...',
                    confirmButtonText:'TIJERA!',
                    imageUrl:'img/piedra-papel-tijeragif.gif',
                    imageWidth:'300px'
                  });
            break;
            case 2:
                Swal.fire({
                    title: 'Gana la Maquina!!!',
                    text: 'PIEDRA PAPEL 0...',
                    confirmButtonText:'TIJERA!',
                    imageUrl:'img/piedra-papel-tijeragif.gif',
                    imageWidth:'300px'
                  });
                sumatoriaMaquina ++;
            break;
            case 3:
                Swal.fire({
                    title: 'Gana el Jugador!!!',
                    text: 'PIEDRA PAPEL 0...',
                    confirmButtonText:'TIJERA!',
                    imageUrl:'img/piedra-papel-tijeragif.gif',
                    imageWidth:'300px'
                  });
                sumatoriaJugador ++;
            break;          
        }
    }else if(e.target.id == "papel"){
        aux = papel;

        switch (maquina()) {
            case 1:
                Swal.fire({
                    title: 'Gana el Jugador!!!',
                    text: 'PIEDRA PAPEL 0...',
                    confirmButtonText:'TIJERA!',
                    imageUrl:'img/piedra-papel-tijeragif.gif',
                    imageWidth:'300px'
                  });
                sumatoriaJugador ++;
            break;
            case 2:
                Swal.fire({
                    title: 'Empate!!!',
                    text: 'PIEDRA PAPEL 0...',
                    confirmButtonText:'TIJERA!',
                    imageUrl:'img/piedra-papel-tijeragif.gif',
                    imageWidth:'300px'
                  });
            break;
            case 3:
                Swal.fire({
                    title: 'Gana la Maquina!!!',
                    text: 'PIEDRA PAPEL 0...',
                    confirmButtonText:'TIJERA!',
                    imageUrl:'img/piedra-papel-tijeragif.gif',
                    imageWidth:'300px'
                  });
                sumatoriaMaquina ++;
            break;          
        }
    }else if(e.target.id == "tijera"){
        aux = tijera;

        switch (maquina()) {
            case 1:
                Swal.fire({
                    title: 'Gana la Maquina!!!',
                    text: 'PIEDRA PAPEL 0...',
                    confirmButtonText:'TIJERA!',
                    imageUrl:'img/piedra-papel-tijeragif.gif',
                    imageWidth:'300px'
                  });
                sumatoriaMaquina ++;
            break;
            case 2:
                Swal.fire({
                    title: 'Gana el Jugador!!!',
                    text: 'PIEDRA PAPEL 0...',
                    confirmButtonText:'TIJERA!',
                    imageUrl:'img/piedra-papel-tijeragif.gif',
                    imageWidth:'300px'
                  });
                sumatoriaJugador ++;
            break;
            case 3:
                Swal.fire({
                    title: 'Empate!!!',
                    text: 'PIEDRA PAPEL 0...',
                    confirmButtonText:'TIJERA!',
                    imageUrl:'img/piedra-papel-tijeragif.gif',
                    imageWidth:'300px'
                  });
            break;          
        }
    }
    console.log(sumatoriaJugador)
    console.log(sumatoriaMaquina)

    sessionStorage.setItem("puntuacion1", sumatoriaJugador);
    sessionStorage.setItem("puntuacion2", sumatoriaMaquina);
    let puntuaciones = document.getElementById ("puntuacion")
    puntuaciones.innerHTML = 
        `Tabla de Victorias:    
            Jugador: ${sessionStorage.getItem("puntuacion1")}
            Maquina: ${sessionStorage.getItem("puntuacion2")}`

}   

    
