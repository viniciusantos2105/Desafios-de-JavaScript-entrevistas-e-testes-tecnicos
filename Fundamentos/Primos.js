//Números primos
const M = 50;

function nPrimo(numero){
    if(numero <= 1){
        return false;
    }

    for(let i = 2; i * i <= numero; i++){
        if(numero % i === 0){
            return false;
        }
        return true;
    }
}

for(let i = 2; i <= M; i++){
    if(nPrimo(i)){
        console.log(i);
    }
}
