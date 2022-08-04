

/*const ELECCIONES = [];

let sumatoria1 = 0;
let sumatoria2 = 0;*/

let buttonPiedra = document.getElementById ("piedra");
    buttonPiedra.onclick = jugador1;
let buttonPapel = document.getElementById ("papel");
    buttonPapel.onclick = jugador1;
let buttonTijera = document.getElementById ("tijera");
    buttonTijera.onclick = jugador1;

    function jugador1() {
    if (buttonPiedra = true){
        return 1
    }else if (buttonPapel = true){
        return 2
    }else if (buttonTijera = true){
        return 3
    }
    
} 
    jugador1()
    console.log(jugador1)
/*function eleccion() {
    let min = 1;
    let max = 3;


    for (let i = 0; i < 3; i++) {

        let player1 = jugador1();
    console.log(player1);

    ELECCIONES.push(player1);

    console.log(ELECCIONES);

    let player2 = Math.floor(Math.random() * (max - min + 1) + min);

        console.log(player2);

        ELECCIONES.push(player2)

        console.log(ELECCIONES);

        alert(`la maquina escogio: ${player2}`);

            juego(player1, player2)

        }
    }

eleccion();

function juego(player1, player2) {

    let miNumero = player1;

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
        alert(`Gana el jugador`);
    }
    else if (miNumero === 2 && player2 === 1) {
        sumatoria1++;
        jugador++;
        alert(`Gana el jugador`);
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
        alert(`Gana el jugador`);
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
*/
