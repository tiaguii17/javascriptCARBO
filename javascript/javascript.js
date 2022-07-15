
let player1 = parseInt(prompt("Ingrese una opcion:\n 1= Piedra\n 2= Papel\n 3= Tijera"))
let player2 = parseInt(prompt("Ingrese una opcion:\n 1= Piedra\n 2= Papel\n 3= Tijera"))


function juego(player1, player2) {
    let resultado = player1 + player2
  
    if(player1 == player2){
        alert("Empate")
  }
        switch(resultado){
            case 3:
                return alert("Gana Papel")
            break;
            case 4: 
                return alert("Gana Piedra")
            break;
            case 5:
                return alert("Gana Tijera")
            break;
        }
            return resultado;

}

  console.log(juego(player1, player2))

 

  