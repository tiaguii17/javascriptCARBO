
function jugadores(){
let player1 = parseInt(prompt("Ingrese una opcion:\n 1= Piedra\n 2= Papel\n 3= Tijera"))
let player2 = parseInt(prompt("Ingrese una opcion:\n 1= Piedra\n 2= Papel\n 3= Tijera"))
let resultado = juego(player1 , player2);
return resultado;
}
  jugadores()

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




 

  