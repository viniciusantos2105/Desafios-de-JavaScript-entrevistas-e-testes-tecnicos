//Fazer um somario de 1 a N
let numero = 3;

function somatorio(numero){
    while(numero < 30){
        numero += 1;
        console.log(`${numero - 1} + 1 = ${numero}`);
    }
}

console.log(somatorio(numero))