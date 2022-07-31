

const elecciones = [];
class Ppt{
    constructor(num){
        this.num = num
    }
}

function eleccion (){
    let min = 1;
    let max = 3;

    let player1 =new Ppt(parseInt(prompt("Ingrese una opcion:\n 1= Piedra\n 2= Papel\n 3= Tijera")));
    
    console.log(player1)
    elecciones.push(player1);
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
                return alert("Gana Papel");
                
            case 4: 
                return alert("Gana Piedra");
                
            case 5:
                return alert("Gana Tijera");
                
        }
            return resultado;
    }   
}
    console.log(juego)
    console.log(elecciones)


 

  