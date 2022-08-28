

let sumatoriaMaquina = 0;
let sumatoriaJugador = 0;
let elecMaquina; 
let elecJugador;

let buttonPiedra = document.getElementById ("piedra");
    buttonPiedra.onclick = jugador1;
let buttonPapel = document.getElementById ("papel");
    buttonPapel.onclick = jugador1;
let buttonTijera = document.getElementById ("tijera");
    buttonTijera.onclick = jugador1;

    

function maquina() {
    let numero = Math.floor(Math.random() * 3) + 1;
        if(numero == 1){
            elecMaquina = "Piedra"
        }else if(numero == 2){
            elecMaquina = "Papel"
        }else if(numero == 3){
            elecMaquina = "Tijeras"
        }
    return numero;
}

function jugador1 (e){
    if(e.target.id == "piedra") {
        elecJugador = "Piedra";

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
        elecJugador = "Papel";
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
        elecJugador = "Tijeras"
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
    let elecciones = document.getElementById("elec")
    elecciones.innerHTML =`
    La Maquina escogio: ${elecMaquina}          
    El jugador escogio: ${elecJugador}`;

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


fetch('./EL.json'
)
    .then( (response) => {
        return response.text();
    })
    .then( (data) => {
        data = JSON.parse(data)
        console.log(data);
    });
