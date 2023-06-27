//Tabuada
let number = 2;
let multiplicador = 1;

function tabuada(numero, multiplicador){
    while(multiplicador <= 10){
        result = numero * multiplicador;
        console.log(`${numero} x ${multiplicador} = ${result}`);
        multiplicador++;
    }
}

console.log(tabuada(number, multiplicador))