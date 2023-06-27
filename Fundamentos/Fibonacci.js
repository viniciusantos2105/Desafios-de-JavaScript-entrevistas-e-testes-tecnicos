//Sequencia fibonacci
const number = 5;

function fibonacci(numero){
    let a = 0;
    let b = 1;

    let sequencia = [];

    while(a <= numero){
        sequencia.push(a);
        const temp = a;
        a = b;
        b = temp + a;
    }

    return sequencia;
}

console.log(`A sequencia de fibonnaci de ${number} é ` + fibonacci(number))