

const ELECCIONES = [];

class Ppt {
    constructor(num) {
        this.num = num
    }
}

let sumatoria1 = 0;
let sumatoria2 = 0;

function eleccion() {
    let min = 1;
    let max = 3;

    let nombre = prompt("Ingrese su nombre: ");


    for (let i = 0; i < 3; i++) {

        let player1 = new Ppt(parseInt(prompt(`
    Ingrese una opcion: 
    1= Piedra 
    2= Papel 
    3= Tijera`)));

    console.log(player1);

    ELECCIONES.push(player1);

    console.log(ELECCIONES);

    let player2 = Math.floor(Math.random() * (max - min + 1) + min);

        console.log(player2);

        ELECCIONES.push(player2)

        console.log(ELECCIONES);

        alert(`la maquina escogio: ${player2}`);

            juego(player1, player2, nombre)

        }
    }

eleccion();

function juego(player1, player2, nombre) {

    let miNumero = player1.num;

    let jugador = 0;
    let maquina = 0;

    if (miNumero === 1 && player2 === 1) {
        alert("empate");
    }
    else if (miNumero === 2 && player2 === 2) {
        alert("empate");

    } else if (miNumero === 3 && player2 === 3) {
        alert("empate");
    }
    else if (miNumero === 1 && player2 === 2) {
        sumatoria2++;
        maquina++;
        alert("Gana la maquina");
    }
    else if (miNumero === 1 && player2 === 3) {
        sumatoria1++;
        jugador++;
        alert(`Gana ${nombre}`);
    }
    else if (miNumero === 2 && player2 === 1) {
        sumatoria1++;
        jugador++;
        alert(`Gana ${nombre}`);
    }
    else if (miNumero === 2 && player2 === 3) {
        sumatoria2++;
        maquina++;
        alert("Gana la maquina");
    }
    else if (miNumero === 3 && player2 === 1) {
        sumatoria2++;
        maquina++;
        alert("Gana la maquina");
    }
    else if (miNumero === 3 && player2 === 2) {
        sumatoria1++;
        jugador++;
        alert(`Gana ${nombre}`);
    }

    console.log(
        `%c Jugador = ${jugador}`, 
        `background: yellow; 
            color: black; 
            padding: 5px 6px 5px 0px; 
            font-size: 15px;
            border-radius: 5px;
        `);
    console.log(
        `%c Maquina = ${maquina}`, 
        `background: yellow; 
            color: black; 
            padding: 5px 6px 5px 0px; 
            font-size: 15px;
            border-radius: 5px;
        `);
}

let resJ = sumatoria1; 
let resM = sumatoria2;
    
if(resJ > resM){
    alert(`Gana El Jugador
    puntuacion: ${sumatoria1}`)
}else if(resJ < resM){
    alert(`Gana la Maquina
    puntuacion: ${sumatoria2}`)
}else if(resJ = resM){
    alert(`Empate
    Jugador: ${sumatoria1}
    Maquina: ${sumatoria2}`)
}
 

  