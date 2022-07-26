

const elecciones = [];

function eleccion (){
    let player1;
    let min = 1;
    let max = 3;

    player1 = parseInt(prompt("Ingrese una opcion:\n 1= Piedra\n 2= Papel\n 3= Tijera"));
    elecciones.push(player1)

    let player2 = Math.floor(Math.random()*(max-min+1)+min);
    elecciones.push(player2)
        alert("la maquina escogio:" +" "+ player2);
    let resultado = juego(player1 , player2);
return resultado;
}
    eleccion();

function juego(player1, player2){
    let resultado = player1 + player2
    if(player1 == player2){
          alert("Empate");
    } else {
        switch(resultado){
            case 3:
                return alert("Gana Papel")
                
            case 4: 
                return alert("Gana Piedra")
                
            case 5:
                return alert("Gana Tijera")
                
        }
            return resultado;
    }   
}
    console.log(elecciones)




 

  