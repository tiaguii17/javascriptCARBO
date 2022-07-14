
let cant = parseFloat(prompt("ingrese la cantidad de sumas que quiera hacer"));
let cant2;
let acumulador = 0;
let i;
let res;
for (i = 1 ; i < cant ; i++ ) {
    cant2 = parseFloat(prompt("Ingrese el numero que quieres que se le suma" + i))
    acumulador = acumulador + cant2;
    
}
alert(acumulador)

let resta = parseFloat(prompt("ingrese la cantidad de veces que quieras restar ese resultado"))
let rest;
for (i = 0; i< resta; i++) {
    rest = parseFloat(prompt("ingrese el numero que le quieras restar" + i))
    acumulador = acumulador - rest;
}
alert(acumulador)