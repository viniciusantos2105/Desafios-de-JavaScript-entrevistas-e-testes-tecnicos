//Numero Par ou Impar
const numero = 4;

function parImpar(numero){
    if(numero % 2 === 0){
        return "par"
    }else{
        return "impar"
    }
}

console.log(`O numero ${numero} é ` + parImpar(numero))