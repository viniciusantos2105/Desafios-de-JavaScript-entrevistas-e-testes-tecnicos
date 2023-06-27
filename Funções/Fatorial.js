const numero = 6;
let result = 0;

function fatorial(numero){
    for(let x = numero-1; x > 0; x--){
        let multi = numero * x;
        numero = multi + result;
    }
    return numero;

}

console.log("Fatorial de 6 é", fatorial(numero))

//Outra maneira de fazer
function fat(n){
    if(n === 0 || n === 1){
        return 1;
    }else{
        return n * fatorial(n -1);
    }
}

const n = 5;
const resultadoFatorial = fatorial(n);
console.log(`O fatorial de ${n} é ${resultadoFatorial}`)
