

let sumatoriaMaquina = 0;
let sumatoriaJugador = 0;

let buttonPiedra = document.getElementById ("piedra");
    buttonPiedra.onclick = jugador1;
let buttonPapel = document.getElementById ("papel");
    buttonPapel.onclick = jugador1;
let buttonTijera = document.getElementById ("tijera");
    buttonTijera.onclick = jugador1;

let puntjug = localStorage.getItem("puntuacion1");
let puntMac = localStorage.getItem("puntuacion2");

puntjug = document.getElementById("puntuacion");
puntMac = document.getElementById("puntuacion");

    function jugador1 (e){
      let piedra = 1;
      let papel = 2;
      let tijera = 3;
      let aux = 0

      localStorage.setItem("puntuacion1" ,sumatoriaJugador);
      localStorage.setItem("puntuacion2" ,sumatoriaMaquina);

        if(e.target.id == "piedra") {
        aux = piedra;

        switch (maquina()) {
            case 1:
                alert("Empate");
            break;
            case 2:
                alert("Gana la maquina");
                sumatoriaMaquina ++;
            break;
            case 3:
                alert("Gana el jugador");
                sumatoriaJugador ++;
            break;          
        }
    }else if(e.target.id == "papel"){
        aux = papel;

        switch (maquina()) {
            case 1:
                alert("Gana el Jugador");
                sumatoriaJugador ++;
            break;
            case 2:
                alert("Empate");
            break;
            case 3:
                alert("Gana la Maquina");
                sumatoriaMaquina ++;
            break;          
        }
    }else if(e.target.id == "tijera"){
        aux = tijera;

        switch (maquina()) {
            case 1:
                alert("Gana la Maquina");
                sumatoriaMaquina ++;
            break;
            case 2:
                alert("Gana el Jugador");
                sumatoriaJugador ++;
            break;
            case 3:
                alert("Empate") ;
            break;          
        }
    }
    console.log(sumatoriaJugador)
    console.log(sumatoriaMaquina)
}   
 function maquina() {
    let numero = Math.floor(Math.random() * 3) + 1;
    console.log(`Numero de la maquina ${numero}`);
    if(numero == 1){
        alert("La Maquina escogio: Piedra");
    }else if(numero == 2){
        alert("La Maquina escogio: Papel");
    }else if(numero == 3){
        alert("La Maquina escogio: Tijera");
    }

        return numero;
 }


